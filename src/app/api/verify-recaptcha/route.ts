import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token, action, projectId } = await request.json();
    
    console.log('API received:', { 
      token: token ? token.substring(0, 20) + '...' : 'missing', 
      action, 
      projectId 
    });

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 400 }
      );
    }

    if (!projectId) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      );
    }

    // Get your secret key from environment variables
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is missing');
      return NextResponse.json(
        { success: false, error: 'Server configuration error - missing secret key' },
        { status: 500 }
      );
    }

    // Get site key from environment variables
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing');
      return NextResponse.json(
        { success: false, error: 'Server configuration error - missing site key' },
        { status: 500 }
      );
    }

    console.log('Calling Google API with:', { projectId, siteKey });

    // Call the reCAPTCHA Enterprise API
    const apiUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`;
    console.log('API URL:', apiUrl.replace(secretKey, 'HIDDEN'));
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: token,
          siteKey: siteKey,
          expectedAction: action,
        },
      }),
    });

    const data = await response.json();
    console.log('Google API response status:', response.status);
    console.log('Google API response data:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('reCAPTCHA Enterprise API error:', data);
      
      // More detailed error response
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA verification failed',
          statusCode: response.status,
          statusText: response.statusText,
          details: data.error || data,
          fullResponse: data
        },
        { status: response.status }
      );
    }

    // Extract the risk score and other details
    const score = data.riskAnalysis?.score ?? 0;
    const reasons = data.riskAnalysis?.reasons ?? [];
    const returnedAction = data.tokenProperties?.action ?? '';
    const valid = data.tokenProperties?.valid ?? false;
    const invalidReason = data.tokenProperties?.invalidReason ?? null;

    // Log for monitoring
    console.log('reCAPTCHA Enterprise assessment:', {
      score,
      valid,
      invalidReason,
      action: returnedAction,
      reasons,
      assessmentId: data.name
    });

    // Check if the token is valid
    if (!valid) {
      return NextResponse.json({
        success: false,
        error: 'Invalid token',
        invalidReason: invalidReason,
        score,
        action: returnedAction,
        valid
      });
    }

    // Check if the action matches (if provided)
    if (action && returnedAction !== action) {
      return NextResponse.json({
        success: false,
        error: 'Action mismatch',
        score,
        action: returnedAction,
        valid
      });
    }

    // Adjust threshold as needed (0.5 is standard)
    const isHuman = score > 0.5;

    return NextResponse.json({ 
      success: isHuman,
      score,
      action: returnedAction,
      valid,
      reasons,
      assessmentId: data.name
    });

  } catch (error) {
    console.error('reCAPTCHA Enterprise verification error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}
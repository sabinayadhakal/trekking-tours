import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ success: false, error: 'No token provided' }, { status: 400 })
    }

    // Verify reCAPTCHA token with Google
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()

    // You can adjust the score threshold (0.5 is common)
    const isHuman = data.success && data.score > 0.5

    return NextResponse.json({ 
      success: isHuman,
      score: data.score,
      action: data.action
    })

  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
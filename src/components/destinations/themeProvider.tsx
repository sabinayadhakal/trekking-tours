"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

interface MotionContextType {
  prefersReducedMotion: boolean
}

const MotionContext = createContext<MotionContextType>({ prefersReducedMotion: false })

export const useMotion = () => useContext(MotionContext)

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <MotionContext.Provider value={{ prefersReducedMotion }}>
      <style jsx global>{`
        :root {
          /* Enhanced Design Tokens */
          --color-success: #10b981;
          --color-success-foreground: #ffffff;
          --color-warning: #f59e0b;
          --color-warning-foreground: #ffffff;
          --color-danger: #ef4444;
          --color-danger-foreground: #ffffff;
          
          /* Spacing Tokens */
          --spacing-xs: 0.25rem;
          --spacing-sm: 0.5rem;
          --spacing-md: 1rem;
          --spacing-lg: 1.5rem;
          --spacing-xl: 2rem;
          --spacing-2xl: 3rem;
          
          /* Border Radius Tokens */
          --radius-xs: 0.125rem;
          --radius-sm: 0.25rem;
          --radius-md: 0.375rem;
          --radius-lg: 0.5rem;
          --radius-xl: 0.75rem;
          --radius-2xl: 1rem;
          
          /* Elevation Shadows */
          --shadow-subtle: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow-elevation: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          
          /* Motion Timing */
          --motion-duration-fast: 120ms;
          --motion-duration-normal: 150ms;
          --motion-duration-slow: 180ms;
          --motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Motion Utility Classes */
        .motion-fade-in {
          animation: fade-in var(--motion-duration-normal) var(--motion-easing);
        }
        
        .motion-slide-up {
          animation: slide-up var(--motion-duration-normal) var(--motion-easing);
        }
        
        .motion-slide-down {
          animation: slide-down var(--motion-duration-normal) var(--motion-easing);
        }
        
        .motion-scale {
          transition: transform var(--motion-duration-fast) var(--motion-easing);
        }
        
        .motion-scale:hover {
          transform: scale(1.02);
        }
        
        .motion-smooth {
          transition: all var(--motion-duration-normal) var(--motion-easing);
        }
        
        /* Reduced Motion Overrides */
        @media (prefers-reduced-motion: reduce) {
          .motion-fade-in,
          .motion-slide-up,
          .motion-slide-down {
            animation: none;
          }
          
          .motion-scale,
          .motion-smooth {
            transition: none;
          }
          
          .motion-scale:hover {
            transform: none;
          }
        }
        
        /* Keyframes */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Enhanced Semantic Color Classes */
        .bg-success { background-color: var(--color-success); }
        .text-success { color: var(--color-success); }
        .bg-warning { background-color: var(--color-warning); }
        .text-warning { color: var(--color-warning); }
        .bg-danger { background-color: var(--color-danger); }
        .text-danger { color: var(--color-danger); }
        
        /* Elevation Utilities */
        .shadow-subtle { box-shadow: var(--shadow-subtle); }
        .shadow-elevation { box-shadow: var(--shadow-elevation); }
        
        /* Focus Ring Enhancement */
        .focus-ring {
          outline: 2px solid transparent;
          outline-offset: 2px;
          transition: outline-color var(--motion-duration-fast) var(--motion-easing);
        }
        
        .focus-ring:focus-visible {
          outline-color: var(--color-ring);
        }
      `}</style>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </div>
    </MotionContext.Provider>
  )
}
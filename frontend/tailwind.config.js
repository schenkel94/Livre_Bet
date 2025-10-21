/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "media"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        success: "hsl(var(--success) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)",
        destructive: "hsl(var(--destructive) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        soft: "var(--shadow-soft)",
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0.9' },
          '100%': { transform: 'translateY(-120%)', opacity: '0.2' }
        },
        pop: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.25)', opacity: '0' }
        },
        breathe: {
          '0%': { transform: 'scale(0.85)' },
          '40%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(0.85)' }
        },
        spawn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        bubble: 'bubble 8s linear infinite',
        pop: 'pop 200ms ease-out forwards',
        breathe: 'breathe 10s ease-in-out infinite',
        spawn: 'spawn 220ms var(--transition-smooth) forwards'
      }
    },
  },
  plugins: [],
};

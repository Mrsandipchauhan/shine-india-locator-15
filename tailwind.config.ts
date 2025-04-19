
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shine": "shine 3s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      // Add Typography for SEO-friendly text styling
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add typography plugin for SEO-friendly content
    require('@tailwindcss/typography'),
    // Custom plugin for SEO and performance optimizations
    plugin(function({ addUtilities }) {
      // SEO-friendly link styles that clearly indicate clickable items
      addUtilities({
        '.link-hover': {
          'position': 'relative',
          'transition': 'color 0.2s ease',
          '&::after': {
            'content': '""',
            'position': 'absolute',
            'bottom': '-2px',
            'left': '0',
            'width': '0',
            'height': '1px',
            'transition': 'width 0.3s ease',
            'backgroundColor': 'currentColor',
          },
          '&:hover::after': {
            'width': '100%',
          },
        },
        '.glass': {
          'backgroundColor': 'rgba(255, 255, 255, 0.1)',
          'backdropFilter': 'blur(5px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block',
        },
        // Utility for eliminating layout shifts (CLS improvement)
        '.preserve-dimensions': {
          'contain': 'size layout'
        },
        // Optimize for mobile performance
        '.mobile-perf': {
          'willChange': 'auto',
          'backfaceVisibility': 'hidden',
        },
        // SEO-friendly focus states for accessibility
        '.focus-visible-ring': {
          '&:focus-visible': {
            'outline': 'none',
            'ringColor': 'hsl(var(--primary) / 0.5)',
            'ringWidth': '2px',
            'ringOffset': '2px',
            'ringOffsetColor': 'hsl(var(--background))',
          },
        },
        // No scrollbar utility
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbarWidth': 'none',
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      })
    }),
  ],
} satisfies Config;

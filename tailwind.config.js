/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        test: 'hsl(var(--test))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        connect: {
          DEFAULT: 'hsl(var(--connect-background))',
          text: 'hsl(var(--connect-text))',
          inner: {
            DEFAULT: 'hsl(var(--connect-inner-background))',
          },
          error: {
            DEFAULT: 'hsl(var(--connect-error))',
            text: 'hsl(var(--connect-error-text))',
          },
        },
        modal: {
          DEFAULT: 'hsl(var(--modal))',
          border: 'hsl(var(--modal-border))',
          text: {
            DEFAULT: 'hsl(var(--modal-text))',
            secondary: 'hsl(var(--modal-text-secondary))',
          },
        },
        menu: {
          DEFAULT: 'hsl(var(--menu))',
          aass: 'hsl(var(--menu))',
        },
        border: 'hsl(var(--border))',
        close: {
          DEFAULT: 'hsl(var(--close-fill))',
          background: 'hsl(var(--close-background))',
          border: 'hsl(var(--close-border))',
        },
        profile: {
          DEFAULT: 'hsl(var(--profile-foreground))',
          action: 'hsl(var(--profile-action))',
          hover: 'hsl(var(--profile-hover))',
        },
        //
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        modal: 'var(--modal-shadow)',
        connect: 'var(--connect-shadow)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
        xxs: 'calc(var(--radius) - 10px)',
        connect: 'var(--connect-radius)',
        modal: 'var(--modal-radius)',
        menuButton: 'var(--menu-button-radius)',
        menuActionButton: 'var(--menu-action-button-radius)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

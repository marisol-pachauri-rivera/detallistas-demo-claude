/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a82d47',
          dark: '#8b1433',
          light: '#ffd9dc',
          hover: '#b7102a',
          container: '#c9465e',
        },
        accent: {
          DEFAULT: '#956e00',
          light: '#f9bd22',
        },
        surface: {
          DEFAULT: '#fff8f4',
          card: '#ffffff',
          soft: '#fdf2ea',
          muted: '#f7ece4',
          strong: '#f1e6df',
          dim: '#e3d8d1',
        },
        text: {
          DEFAULT: '#201b16',
          muted: '#574143',
          soft: '#8b7173',
          inverse: '#ffffff',
        },
        border: {
          DEFAULT: '#ebe0d9',
          strong: '#debfc1',
        },
        error: '#ba1a1a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        display: ['44px', { lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg-mobile': ['26px', { lineHeight: '34px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'title-lg': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'title-md': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '700' }],
      },
      spacing: {
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        'gutter-mobile': '1rem',
        'gutter-desktop': '1.5rem',
        'margin-mobile': '1.25rem',
        'margin-desktop': '2.5rem',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}

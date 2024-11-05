import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        mobile: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        'main-primary': '#F2E89B',
        'main-secondary': '#AC9A77',
        'main-em': '#ED9293',
        'main-bg': '#F9F8F5',
        'basic-color': '#16130E', // 기본 텍스트 색상
        primary: {
          0: '#FEFDF6',
          1: '#F8F1C8',
          2: '#F2E69B',
          3: '#EDDA6E',
          4: '#E7CF41',
          5: '#D9BE1C',
          6: '#AC9616',
          7: '#7F6F10',
          8: '#51470A',
          9: '#242005',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          0: '#F9F8F5',
          1: '#E6E0D6',
          2: '#D3C9B6',
          3: '#BFB196',
          4: '#AC9A77',
          5: '#95815B',
          6: '#756647',
          7: '#564A34',
          8: '#362F21',
          9: '#16130E',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        em: {
          0: '#FBE9E9',
          1: '#F4BEBE',
          2: '#ED9293',
          3: '#E56567',
          4: '#DE3B3D',
          5: '#C42124',
          6: '#991A1C',
          7: '#6D1214',
          8: '#410B0C',
          9: '#160404',
        },
        gray: {
          0: '#FFFFFF',
          1: '#E6E6E6',
          2: '#CCCCCC',
          3: '#B3B3B3',
          4: '#999999',
          5: '#808080',
          6: '#4C4C4C',
          7: '#333333',
          8: '#191919',
          9: '#000000',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
      backgroundColor: {
        ['image-black']: 'rgba(74, 74, 74, 0.6)',
      },
    },
    fontFamily: {
      main: ['Pretendard-Regular'],
    },
    fontSize: {
      xss: '11px', // 11px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '15px', // 15px
      base: '1rem', // 16px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
    },
  },
  plugins: [tailwindcssAnimate],
  mode: 'jit',
};
export default config;

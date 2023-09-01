import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2d323c',
        'red-main': '#fc0002',
        'red-main-hover': '#d41b1d',
        'section-title': '#c9c9ca',
        'first-gradient': "#161619",
        'final-gradient': '#2d323c',
        'planos-titulo': '#bac7e0',
        'success': '#009e2f',
      },
      backgroundImage: {
        'banner': "url('./wall2')",
      },
    },
  },
  plugins: [],
}
export default config

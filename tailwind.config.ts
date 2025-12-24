import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          subtle: "#fff8f4",
          tertiary: "#f3f4f6",
          notification: "#5d2c89",
        },
        primary: {
          DEFAULT: "#ffab4a",
          gradient: {
            start: "#ffbf66",
            end: "#ff9e36",
          },
        },
        brand: {
          DEFAULT: "#5d2c89",
          dark: "#451e66",
        },
        text: {
          primary: "#2d2d2d",
          secondary: "#555555",
          brand: "#5d2c89",
          inverse: "#ffffff",
        },
        success: "#00b67a",
        border: {
          DEFAULT: "#e5e7eb",
          brand: "#5d2c89",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "Varela Round", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        button: "0 4px 14px 0 rgba(255, 171, 74, 0.39)",
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.5',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config



import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif',],
    },
    screens: {
      'sm': '400px',
      'ur': '530px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1220px',
    },
    container: {
      center: true,
      padding: '10px',
      screens: {
        'xl': '1120px',
      },
    },

    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myWhite: '#f5f5f5',
        myBlack: "#1b1b1b",
        myYellow: "#ff4f08",
        myBlue: "#1E2F97",
      },
    },
  },
  plugins: [],
} satisfies Config;

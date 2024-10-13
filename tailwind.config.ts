import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1400px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBrown: "#F3EFE1",
        greenBlue: "#5A9DA2",
        darkRed: "#7F5851",
        footerBrown: "#D3CAAB",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '24px': '24px',
        '42': '42px',
      },
      
    },
  },
  plugins: [],
};
export default config;
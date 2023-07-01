/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "325px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        "dark-theme": {
          brand: {
            primary: "#ffffff",
            secondary: "#FFAB5C",
          },
          hover: "#FFAB5C",
          "bkg-1": "#ffffff",
          "bkg-2": "#000000",
          "bkg-3": "#1c2222",
          "bkg-4": "#121616",
          "fkg-1": "#29F592",
        },
        "light-theme": {
          brand: {
            primary: "#000000",
            secondary: "#FFAB5C",
          },
          hover: "#FFAB5C",
          "bkg-1": "#ffffff",
          "bkg-2": "#ffffff",
          "bkg-3": "#1c2222",
          "bkg-4": "#121616",
          "fkg-1": "#29F592",
        },

        // ==============================================================
        "th-bkg-1": "var(--bkg-1)",
        "th-bkg-2": "var(--bkg-2)",
        "th-bkg-3": "var(--bkg-3)",
        "th-bkg-4": "var(--bkg-4)",
        "th-fkg-1": "var(--fkg-1)",
        "th-brand": "var(--brand)",
        "th-brand-secondary": "var(--brand-secondary)",
        "th-hover": "var(--hover)",
      },
    },
  },
  plugins: [],
};

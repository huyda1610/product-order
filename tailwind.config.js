const { warn } = require("console");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // text colors
        text: {
          DEFAULT: "#212B36",
          secondary: "#637381",
          disabled: "#919EAB",
        },

        // Custom colors
        primary: {
          lighter: "#f4f7fe",
          light: "#31abe8",
          DEFAULT: "#0691d8",
          // dark: '#007867',
          // darker: '#004B50',
        },

        secondary: {
          lighter: "#EFD6FF",
          light: "#C684FF",
          DEFAULT: "#8E33FF",
          dark: "#5119B7",
          darker: "#27097A",
        },
        info: {
          lighter: "#CAFDF5",
          light: "#61F3F3",
          DEFAULT: "#00B8D9",
          dark: "#006C9C",
          darker: "#003768",
        },
        success: {
          lighter: "#D3FCD2",
          light: "#77ED8B",
          DEFAULT: "#22C55E",
          dark: "#118D57",
          darker: "#065E49",
        },
        warning: {
          lighter: "#FFF5CC",
          light: "#FFD666",
          DEFAULT: "#FFAB00",
          dark: "#B76E00",
          darker: "#7A4100",
        },
        error: {
          lighter: "#FFE9D5",
          light: "#FFAC82",
          DEFAULT: "#FF5630",
          dark: "#B71D18",
          darker: "#7A0916",
        },
        gray: {
          50: "#FCFDFD",
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#1C252E",
          900: "#141A21",
          border: "#e0e0e0",
          img: "#e8e9ed",
          table: "#f5f5f7",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          from: { opacity: 1, transform: "translateY(0)" },
          to: { opacity: 0, transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out", // Animation fadeOut
      },
    },
  },
  important: true,
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

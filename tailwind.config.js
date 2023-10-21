/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    screens: {
      md: "375px",
      lg: "1440px", // custom breakpoint for desktop (1440px)
    },

    colors: {
      body: "var(--body)",
      button: "var(--button)",
      primary: "var(--primary)",
      "x-82-8b-9c": "var(--x-82-8b-9c)",
    },
    fontFamily: {
      "h-1": "var(--h-1-font-family)",
      "h-2": "var(--h-2-font-family)",
      "p-1": "var(--p-1-font-family)",
      "p-2": "var(--p-2-font-family)",
    },
  },
};
export const plugins = [];

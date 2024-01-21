/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: ["group-hover"],
      boxShadow: {
        yellow: "0 0 20px 0 #f59e0b",
      },
      colors: {
        "woodsmoke-bg-950-bg": "#1a1a1a",
        "gray-for-text-400": "#98a2b3",
        "gray-for-text-500": "#667085",
        "grey-15": "#262626",
        "gray-for-text-200": "#eaecf0",
        "default-color-white": "#fff",
        "amber-500-primary": "#ffbf00",
        "gray-for-text-300": "#d0d5dd",
        gray: {
          100: "rgba(26, 26, 26, 0.6)",
          200: "rgba(255, 255, 255, 0.1)",
        },
        steelblue: "#0d9bbf",
        "grey-70": "#b3b3b3",
        gold: "rgba(255, 191, 0, 0.2)",
      },
      spacing: {},
      fontFamily: {
        "xl-header-semibold": "Quicksand",
        "text-md-medium": "Inter",
        h1: "'Allerta Stencil'",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "8xs": "5px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.13rem",
      "41xl": "3.75rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      sm: "0.88rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "10xl": "1.81rem",
      "19xl": "2.38rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          100: "#3e3e3e",
          200: "#123557",
        },
        gray: {
          100: "#222",
          200: "rgba(255, 255, 255, 0.2)",
        },
        black: "#000",
        azure: "#e8fbff",
        coral: "#eb7150",
        tomato: "#d15736",
        darkslateblue: "#072f57",
        chocolate: "#e7760d",
        darkgreen: "#00732f",
        midnightblue: "#271555",
        mediumseagreen: {
          100: "#269954",
          200: "rgba(38, 153, 84, 0.09)",
        },
        lightgray: "#d1d5db",
        slategray: "#6b7280",
        dimgray: "#6d6e71",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        arial: "Arial",
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "12xs": "1px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
    fontSize: {
      sm: "14px",
      "base-1": "15.1px",
      base: "16px",
      xl: "20px",
      "mid-2": "17.2px",
      "18xl-3": "37.3px",
      "3xl": "22px",
      "11xl": "30px",
      lg: "18px",
      "lg-8": "18.8px",
      "7xl": "26px",
      "2xl": "21px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      mini: "15px",
      "mini-3": "14.3px",
      "base-3": "15.3px",
      inherit: "inherit",
    },
    screens: {
      xs: "450px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      mq1000: { max: "999px" }, // Custom media query for screens below 1000px
      mq600: { max: "600px" }, // Custom media query for screens below 600px
      "460px": "460px", // Custom breakpoint for 460px
    },
  },
  corePlugins: {
    preflight: false,
  },
}

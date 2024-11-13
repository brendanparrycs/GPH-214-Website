/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-space-gray": "#3B3B3B",
        "dark-space-gray": "#1C1C1C",
        "dark-saturated-red": "#EB0000",
      },
      borderWidth: {
        3: "3px",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 3s infinite ease-in-out",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        /* Chrome, Safari, and Opera */
        ".scrollbar-hidden::-webkitscrollbar": {
          display: "none",
        },
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};

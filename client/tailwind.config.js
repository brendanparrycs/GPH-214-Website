/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-space-gray": "#3B3B3B",
        "dark-space-gray": "#1C1C1C",
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

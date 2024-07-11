/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  prefix: "prince-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
    fontFamily: {
      Timers: ["Orbitron"],
      Digital : ["clock-time"],
      AppleFont : ["appleFont"]
    },
  },
  plugins: [daisyui],

};

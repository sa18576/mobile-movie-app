/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", // Include the app directory
    , "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#479543",
        secondary: "#675643",
        light:{
          100: "#D6C6FF",
          200: '#A8B5DB',
          300: "#9CA4AB"
        },
        accent: "000444"
      }
    },
  },
  plugins: [],
}
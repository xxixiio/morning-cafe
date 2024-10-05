/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#e7fc9f',
        'light-beige': '#e9edc9',
        'off-white': '#fefae0',
        'light-cream': '#faedcd',
        'olive': '#d4a373',
      },
    },
  },
  plugins: [],
}


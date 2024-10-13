/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        theme: "#1CA3A3",
        btn: "#29FFFF",
        service: "#14C3C3",
        footer: "#9FD2D5"
      },
      
      backgroundImage: {
        "computer": "url('/ComputerScreen.png')",
      },
    },
  },
  plugins: [],
};

// background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/path/to/image.jpg');
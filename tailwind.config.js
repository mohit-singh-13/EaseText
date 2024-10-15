/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        theme: "#1CA3A3",
        btn: "#29FFFF",
        service: "#14C3C3",
        footer: "#9FD2D5",
      },

      backgroundImage: {
        computer: "url('/ComputerScreen.png')",
      },

      screens: {
        xs: "344px",
        sm: "376px",
        md: "412px",
        lg: "540px",
        xl: "648px",
        "2xl": "768px",
        "3xl": "1024px",
        "4xl": "1240px",
        "5xl": "1475px",
      },
    },
  },
  plugins: [],
};

// background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/path/to/image.jpg');

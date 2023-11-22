/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      // prettier-ignore
      colors: {
        'ring-blue': '#3399ff',
        'white': "#ffffff",
        "light-blue": "#dff6ff",
        'blue': "#47b5ff",
        "light-green": "#256d85",
        'green': "#06283d",
      },
      // prettier-ignore
      animation: {
        'slide': "slide-down 500ms ease-out forwards",
      },
      // prettier-ignore
      spacing: {
        "20vh": "20vh",
        '4': "4%",
        '25':'25rem',
        'modal': 'calc(50% - 14rem)',
      },
      keyframes: {
        "slide-down": {
          from: {
            opacity: "0",
            transform: "translateY(-15rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      plugins: [require("preline/plugin")],
    },
  },
};

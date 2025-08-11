// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10px, -10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(15px, 15px)" },
        },
      },
      animation: {
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

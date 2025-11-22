export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FDFCFD",
        card: "#F3F2F8",
        card2: "#ECEAF4",
        ink: "#252531",
        muted: "#6B6B7A",
        primary: "#776BC8",
        primaryDark: "#5E54B6",
        tealSoft: "#96B2B7",
        coral: "#E67361",
        ringSoft: "rgba(119,107,200,0.25)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(18, 13, 38, 0.06)",
        softHover: "0 14px 40px rgba(18, 13, 38, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

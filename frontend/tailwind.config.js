/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/JSX files in src
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors for backwards compatibility
        cream: "#ffffff",
        beige: "#f8f9fa",
        taupe: "#e9ecef",
        "brown-gray": "#dee2e6",
        charcoal: "#212529",
        wine: "#495057",
        // New grey palette
        "grey-50": "#f8f9fa",
        "grey-100": "#e9ecef",
        "grey-200": "#dee2e6",
        "grey-300": "#ced4da",
        "grey-400": "#adb5bd",
        "grey-500": "#6c757d",
        "grey-600": "#495057",
        "grey-700": "#343a40",
        "grey-800": "#212529",
        "grey-900": "#000000",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        crimson: ["Crimson Text", "serif"],
        prata: ["Prata", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "title-xl": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "title-lg": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "title-md": ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        subtitle: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["1.25rem", { lineHeight: "1.75", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',     // Navy blue
        secondary: '#fbbf24',   // Amber
        accent: '#10b981',      // Emerald
        background: '#f3f4f6',  // Light gray
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
};

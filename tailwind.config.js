/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Barlow: ["Barlow", "sans-serif"],
      "Barlow+Condensed": ["Barlow Condensed", "sans-serif"],
      Bellefair: ["Bellefair", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-desktop":
          'url("../src/assets/images/home/background-home-desktop.jpg")',
        "home-tablet":
          'url("../src/assets/images/home/background-home-tablet.jpg")',
        "home-mobile":
          'url("../src/assets/images/home/background-home-mobile.jpg")',
        "destination-desktop":
          'url("../src/assets/images/destination/background-destination-desktop.jpg")',
        "destination-tablet":
          'url("../src/assets/images/destination/background-destination-tablet.jpg")',
        "destination-mobile":
          'url("../src/assets/images/destination/background-destination-mobile.jpg")',
        "crew-desktop":
          'url("../src/assets/images/crew/background-crew-desktop.jpg")',
        "crew-tablet":
          'url("../src/assets/images/crew/background-crew-tablet.jpg")',
        "crew-mobile":
          'url("../src/assets/images/crew/background-crew-mobile.jpg")',
        "technology-desktop":
          'url("../src/assets/images/technology/background-technology-desktop.jpg")',
        "technology-tablet":
          'url("../src/assets/images/technology/background-technology-tablet.jpg")',
        "technology-mobile":
          'url("../src/assets/images/technology/background-technology-mobile.jpg")',
      },
    },
  },
  plugins: [],
};

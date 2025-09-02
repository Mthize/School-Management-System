import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
     colors: {
          lamaSky: "#00CFFF",          // Bold, electric sky blue
          lamaSkyLight: "#DFF8FF",     // Crisp light aqua
          lamaPurple: "#7C4DFF",       // Vivid, energetic purple
          lamaPurpleLight: "#EDE7FF",  // Soft glowing lavender
          lamaYellow: "#FFC400",       // Bright, sunny golden yellow
          lamaYellowLight: "#FFF3CC",  // Warm light butter yellow
      }   
    },
  },
  plugins: [],
};
export default config;

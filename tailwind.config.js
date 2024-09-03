const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./theme/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //Primary and secondary colors
        primary: "#e5e7eb",
        secondary: "#f3f4f6",

        // Accent colors (uses hsl values defined in styles/globals.css)
        accent:
          "hsl(var(--hue-accent),var(--saturation-accent),var(--lightness-accent))",
        "accent-hover":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 10%))",
        "accent-active":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) - 10%))",
        "accent-disabled":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 30%))",

        // Other colors
        current: "currentColor",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        display: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        "display-xs": "2.25rem", // 36px
        "display-sm": "2.75rem", // 44px
        "display-md": "3.25rem", // 52px
        "display-lg": "6rem", // 96px

        // Heading sizes

        "heading-xs": "1.25rem", // 20px
        "heading-sm": "1.5rem", // 24px
        "heading-md": "2.375rem", // 38px
        "heading-lg": "2rem", // 32px
        "heading-xl": "2.25rem", // 36px
        "heading-xxl": "2.5rem", // 40px

        // Label sizes

        "label-xs": "0.75rem", // 12px
        "label-sm": "0.875rem", // 14px
        "label-md": "1rem", // 16px
        "label-lg": "1.125rem", // 18px

        // Paragraph sizes

        "paragraph-xs": "0.75rem", // 12px
        "paragraph-sm": "0.875rem", // 14px
        "paragraph-md": "1rem", // 16px
        "paragraph-lg": "1.125rem", // 18px
      },
      lineHeight: {
        // Display line heights
        "display-xs": "2.75rem", // 44px
        "display-sm": "3.25rem", // 52px
        "display-md": "4rem", // 64px
        "display-lg": "7rem", // 112px

        // Heading line heights
        "heading-xs": "1.75rem", // 28px
        "heading-sm": "2rem", // 32px
        "heading-md": "2.25rem", // 36px
        "heading-lg": "2.5rem", // 40px
        "heading-xl": "2.75rem", // 44px
        "heading-xxl": "3.25rem", // 52px

        // Label line heights
        "label-xs": "1", // 16px
        "label-sm": "1", // 16px
        "label-md": "1.25rem", // 20px
        "label-lg": "1.5rem", // 24px

        // Paragraph line heights
        "paragraph-xs": "1.25rem", // 20px
        "paragraph-sm": "1.25rem", // 20px
        "paragraph-md": "1.5rem", // 24px
        "paragraph-lg": "1.75rem", // 28px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

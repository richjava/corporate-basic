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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent:
          "hsl(var(--hue-accent),var(--saturation-accent),var(--lightness-accent))",
        "accent-hover":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 10%))",
        "accent-active":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) - 10%))",
        "accent-disabled":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 30%))",
        border: "var(--border)",
        // Other colors
        current: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        "display-xs": "var(--text-display-xs)",
        "display-sm": "var(--text-display-sm)",
        "display-md": "var(--text-display-md)",
        "display-lg": "var(--text-display-lg)",

        // Heading sizes

        "heading-xs": "var(--text-heading-xs)",
        "heading-sm": "var(--text-heading-sm)",
        "heading-md": "var(--text-heading-md)",
        "heading-lg": "var(--text-heading-lg)",
        "heading-xl": "var(--text-heading-xl)",
        "heading-xxl": "var(--text-heading-xxl)",

        // Label sizes

        "label-xs": "var(--text-label-xs)",
        "label-sm": "var(--text-label-sm)",
        "label-md": "var(--text-label-md)",
        "label-lg": "var(--text-label-lg)",

        // Paragraph sizes

        "paragraph-xs": "var(--text-paragraph-xs)",
        "paragraph-sm": "var(--text-paragraph-sm)",
        "paragraph-md": "var(--text-paragraph-md)",
        "paragraph-lg": "var(--text-paragraph-lg)",
      },
      lineHeight: {
        // Display line heights
        "display-xs": "var(--leading-display-xs)",
        "display-sm": "var(--leading-display-sm)",
        "display-md": "var(--leading-display-md)",
        "display-lg": "var(--leading-display-lg)",

        // Heading line heights
        "heading-xs": "var(--leading-heading-xs)",
        "heading-sm": "var(--leading-heading-sm)",
        "heading-md": "var(--leading-heading-md)",
        "heading-lg": "var(--leading-heading-lg)",
        "heading-xl": "var(--leading-heading-xl)",
        "heading-xxl": "var(--leading-heading-xxl)",

        // Label line heights
        "label-xs": "var(--leading-label-xs)",
        "label-sm": "var(--leading-label-sm)",
        "label-md": "var(--leading-label-md)",
        "label-lg": "var(--leading-label-lg)",

        // Paragraph line heights
        "paragraph-xs": "var(--leading-paragraph-xs)",
        "paragraph-sm": "var(--leading-paragraph-sm)",
        "paragraph-md": "var(--leading-paragraph-md)",
        "paragraph-lg": "var(--leading-paragraph-lg)",
      },
      borderRadius: {
        DEFAULT: "var(--corner-primary)",
        lg: "var(--corner-primary-lg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export const theme = {
  colors: {
    // Brand & status
    primary: "#4CAF50", // fresh green, inviting for "tasks done"
    secondary: "#2196F3", // calm blue accent
    success: "#4CAF50",
    warning: "#FFC107",
    error: "#F44336",

    // Backgrounds & surfaces
    background: "#F9FAFB", // soft gray-white
    surface: "#FFFFFF", // card/sheet background
    surfaceAlt: "#F3F4F6", // subtle alternate surface (filters, inputs)

    // Text colors
    text: {
      primary: "#111827", // near-black, high contrast
      secondary: "#4B5563", // muted gray, body text
      tertiary: "#9CA3AF", // light gray, placeholders
      inverted: "#FFFFFF", // text on dark backgrounds
    },

    // Borders & dividers
    border: "#E5E7EB",
    divider: "#D1D5DB",

    // Overlay for modals, dialogs
    overlay: "rgba(17, 24, 39, 0.5)",

    // Extras
    highlight: "#EEF2FF", // light indigo highlight
    muted: "#F3F4F6", // subtle muted blocks
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    largeTitle: {
      fontSize: 34,
      fontWeight: "700" as const,
      lineHeight: 41,
    },
    title1: {
      fontSize: 28,
      fontWeight: "700" as const,
      lineHeight: 34,
    },
    title2: {
      fontSize: 22,
      fontWeight: "700" as const,
      lineHeight: 28,
    },
    title3: {
      fontSize: 20,
      fontWeight: "600" as const,
      lineHeight: 25,
    },
    headline: {
      fontSize: 17,
      fontWeight: "600" as const,
      lineHeight: 22,
    },
    body: {
      fontSize: 17,
      fontWeight: "400" as const,
      lineHeight: 22,
    },
    subheadline: {
      fontSize: 15,
      fontWeight: "400" as const,
      lineHeight: 20,
    },
    footnote: {
      fontSize: 13,
      fontWeight: "400" as const,
      lineHeight: 18,
    },
    caption: {
      fontSize: 12,
      fontWeight: "400" as const,
      lineHeight: 16,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
  },
} as const;

export type Theme = typeof theme;

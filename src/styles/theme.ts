export const theme = {
  colors: {
    background: 'linear-gradient(90deg, #0A2A50 0%, #061426 55%, #020A13 100%)',
    header: '#04101D',

    text: '#FFFFFF',
    textSecondary: '#8FA3BF',
  },

  typography: {
    fontFamily:
      "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",

    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },

    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '28px',
      hero: '40px',
    },

    lineHeight: {
      sm: 1.3,
      md: 1.5,
      lg: 1.6,
    },
  },
};

export type AppTheme = typeof theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(66, 119, 202, 1)', // Light blue
      light: 'rgba(255, 255, 255, 1)', // White
      dark: 'rgba(4, 78, 196, 1)', // Dark blue
    },
    secondary: {
      main: 'rgba(229, 229, 229, 1)', // grey
      contrastText: 'rgba(229, 229, 229, 1)', // For text on secondary color, use primary
    },
    error: {
      main: 'rgba(255, 75, 107, 1)', // Assuming Alert is for errors red
    },
    warning: {
      main: 'rgba(255, 233, 39, 1)', // Your UI kit Warning color yellow
    },
    success: {
      main: 'rgba(5, 170, 111, 1)', // Your UI kit Success color green
    },
    background: {
      default: 'rgba(255, 255, 255, 1)', // white background
      paper: 'rgba(255, 255, 255, 1)', // For elements like cards, dialogues
    },
    text: {
      primary: 'rgba(40, 43, 46, 1)',
      secondary: 'rgba(142, 142, 142, 1)',
    },
  },
  custom: {
    header: 'linear-gradient(158deg, #C9D8F0 0.65%, #FAF5F5 111.4%)',
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    h2: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    h3: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    h4: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          fontSize: '16px',
          color: 'rgba(40, 43, 46, 1)',
          '&.Mui-selected': {
            color: 'rgba(40, 43, 46, 1)',
            fontWeight: 600,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transform: 'translateY(-8px)',
          color: 'rgba(66, 119, 202, 1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Устанавливаем borderRadius для всех карточек
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 'auto',
          },
        },
      },
    },
    // Кастомизация бумажного фона
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Устанавливаем borderRadius для всех Paper компонентов
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          '&.textRegular': {
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          },
          '&.textSmallRegular': {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          },
          '&.textSmallBold': {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          },
          '&.textSmallMedium': {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          },
          '&.textCardH1': {
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.2,
            margin: 0,
            padding: 0,
          },
          '&.priceCard': {
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          },
          '&.textCard': {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          },
        },
      },
    },
  },
});
export default theme;

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#653CAD', 
      light: '#8662C7', 
      dark: '#421987'
    },
    secondary: {
      main: '#207227', 
      light: '#3F9142',
      dark: '#0E5814'
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
};

export default MyApp

import { light } from '@/scss/MaterialTheme/index';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from "next/app";
import { useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
//@ts-ignore
const [theme, setTheme] =useState(createTheme(light));
   //SOCKET.IO, 
  return <ThemeProvider theme={theme}>
      <CssBaseline />
    <Component {...pageProps} />
    </ThemeProvider>;
}

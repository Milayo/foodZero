import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

const typographyTheme = {
  fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
  bodyFontFamily: "Lato, sans-serif",
  headingFontFamily: "Rufina, serif",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

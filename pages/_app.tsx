import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import { theme } from "../utils/themes/theme";
import "../styles/styles.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import React from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";

import { theme } from "../styles/theme";
import { StoreProvider } from "../context/StoreContext";
import { GlobalStyles } from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default App;

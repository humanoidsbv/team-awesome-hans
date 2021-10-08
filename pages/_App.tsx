import React from "react";

import type { AppProps } from "next/app";
import { StoreProvider } from "../context/StoreContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};
export default App;

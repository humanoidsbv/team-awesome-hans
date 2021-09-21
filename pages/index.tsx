import React from "react";
import Head from "next/head";

import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";
import { Wrapper } from "../components/Wrapper/Wrapper.styled";
import { GlobalStyles } from "../components/global";
import { PlusIcon } from "../components/Icon/PlusIcon";

const App = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Button type="Primary" onClick={() => console.log("i got clicked")}>
          <span>New time entry</span>
          <PlusIcon />
        </Button>
      </Wrapper>
    </div>
  );
};

export default App;

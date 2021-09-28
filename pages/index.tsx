import React, { useState } from "react";
import Head from "next/head";

import { Button } from "../components/button/Button";
import { GlobalStyles } from "../components/global";
import { Header } from "../components/header/Header";
import { mockTimeEntries } from "../fixtures/time-entries";
import { PlusIcon } from "../components/icon/PlusIcon";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { Wrapper } from "../components/wrapper/Wrapper.styled";
import { EntryForm } from "../components/entry-form/EntryForm";

const App = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Wrapper>
        {!isOpen && (
          <Button type="Primary" onClick={handleClick}>
            <span>New time entry</span>
            <PlusIcon />
          </Button>
        )}
        {isOpen && <EntryForm onClick={handleClick} />}
        <TimeEntries timeEntries={timeEntries} />
      </Wrapper>
    </>
  );
};

export default App;

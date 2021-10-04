import React, { useState } from "react";
import Head from "next/head";

import { Button } from "../components/button/Button";
import { EntryForm } from "../components/entry-form/EntryForm";
import { GlobalStyles } from "../components/global";
import { Header } from "../components/header/Header";
import { mockTimeEntries, FormattedTimeEntryInterface } from "../fixtures/time-entries";
import { PlusIcon } from "../components/icon/PlusIcon";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { Wrapper } from "../components/wrapper/Wrapper.styled";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (newTimeEntry: FormattedTimeEntryInterface) => {
    setTimeEntries([...timeEntries, newTimeEntry]);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header title="Timesheets" subTitle="Entries" count={timeEntries.length} />
      <Wrapper>
        {!isOpen && (
          <Button onClick={handleClick} type="Primary">
            <span>New time entry</span>
            <PlusIcon />
          </Button>
        )}
        <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={handleTimeEntrySubmit} />
        <TimeEntries timeEntries={timeEntries} />
      </Wrapper>
    </>
  );
};

export default App;

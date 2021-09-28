import React, { useState } from "react";
import Head from "next/head";

import { Button } from "../components/button/Button";
import { EntryForm } from "../components/entry-form/EntryForm";
import { GlobalStyles } from "../components/global";
import { Header } from "../components/header/Header";
import { PlusIcon } from "../components/icon/PlusIcon";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { TimeEntryInterface, mockTimeEntries } from "../fixtures/time-entries";
import { Wrapper } from "../components/wrapper/Wrapper.styled";

const App = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (timeEntry: TimeEntryInterface) => {
    const formatedTimeEntry = {
      id: Math.random(),
      client: timeEntry.employer,
      startTimestamp: new Date(`${timeEntry.date}T${timeEntry.from}`).toISOString(),
      stopTimestamp: new Date(`${timeEntry.date}T${timeEntry.to}`).toISOString(),
    };
    setTimeEntries([...timeEntries, formatedTimeEntry]);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Wrapper>
        {!isOpen && (
          <Button onClick={handleClick} type="Primary">
            <span>New time entry</span>
            <PlusIcon />
          </Button>
        )}
        {isOpen && <EntryForm onClose={handleClick} onSubmit={handleTimeEntrySubmit} />}
        <TimeEntries timeEntries={timeEntries} />
      </Wrapper>
    </>
  );
};

export default App;

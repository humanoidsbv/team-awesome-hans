import React, { useState } from "react";
import Head from "next/head";

import { Button } from "../components/button/Button";
import { EntryForm } from "../components/entry-form/EntryForm";
import { GlobalStyles } from "../components/global";
import { Header } from "../components/header/Header";
import { mockTimeEntries, TimeEntryInterface } from "../fixtures/time-entries";
import { PageContainer } from "../components/PageContainer/PageContainer.styled";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import Plus from "../public/images/plus-icon.svg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (newTimeEntry: TimeEntryInterface) => {
    setTimeEntries([...timeEntries, newTimeEntry]);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header title="Timesheets" subTitle={`${timeEntries.length} Entries`} />
      <PageContainer>
        {!isOpen && (
          <Button onClick={handleClick} type="primary">
            <span>New time entry</span>
            <Plus />
          </Button>
        )}
        <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={handleTimeEntrySubmit} />
        <TimeEntries timeEntries={timeEntries} />
      </PageContainer>
    </>
  );
};

export default App;

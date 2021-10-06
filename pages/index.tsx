import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Button } from "../components/button/Button";
import { EntryForm } from "../components/entry-form/EntryForm";
import { getTimeEntries, NotFoundError, postTimeEntry } from "../services/time-entries";
import { GlobalStyles } from "../styles/global";
import { Header } from "../components/header/Header";
import { NoTimeEntries } from "../components/time-entries/NoTimeEntries";
import { PageContainer } from "../components/PageContainer/PageContainer.styled";
import { theme } from "../styles/theme";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";
import Plus from "../public/images/plus-icon.svg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState<TimeEntryInterface[]>([]);
  const [timeEntryMessage, setTimeEntryMessage] = useState<string>();

  const fetchTimeEntries = async () => {
    const response = await getTimeEntries();
    if (response instanceof NotFoundError) {
      setTimeEntryMessage("Oh no! Something went wrong..");
      return;
    }
    if (response.length === 0) {
      setTimeEntryMessage("No entries found..");
      return;
    }
    setTimeEntries(response);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (newTimeEntry: TimeEntryInterface) => {
    postTimeEntry(newTimeEntry);
    fetchTimeEntries();
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header title="Timesheets" subtitle={`${timeEntries?.length} Entries`} />
        <PageContainer>
          {!isOpen && (
            <Button onClick={handleClick}>
              <span>New time entry</span>
              <Plus />
            </Button>
          )}
          <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={handleTimeEntrySubmit} />
          <TimeEntries timeEntries={timeEntries} />
          {!timeEntries.length && <NoTimeEntries message={timeEntryMessage} />}
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;

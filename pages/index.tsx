import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Button } from "../components/button/Button";
import { EntryForm } from "../components/entry-form/EntryForm";
import { GlobalStyles } from "../styles/global";
import { Header } from "../components/header/Header";
import { TimeEntryInterface } from "../fixtures/time-entries";
import { PageContainer } from "../components/PageContainer/PageContainer.styled";
import { theme } from "../styles/theme";
import Plus from "../public/images/plus-icon.svg";
import { getTimeEntries, NotFoundError } from "../services/time-entries";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState<TimeEntryInterface[]>([]);

  async function fetchTimeEntries() {
    const response = await getTimeEntries();
    if (response instanceof NotFoundError) {
      console.log("No entries found!");
      return
    }
    setTimeEntries(response);
    console.log("Time entries: ", timeEntries);
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (newTimeEntry: TimeEntryInterface) => {
    setTimeEntries([...timeEntries, newTimeEntry]);
  };
  console.log("Time entries: ", timeEntries);

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
          {/* <TimeEntries timeEntries={timeEntries} /> */}
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;

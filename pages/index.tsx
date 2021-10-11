import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Button } from "../components/button/Button";
import { deleteTimeEntry, getTimeEntries, postTimeEntry } from "../services/time-entries-api";
import { EntryForm } from "../components/entry-form/EntryForm";
import { GlobalStyles } from "../styles/global";
import { Header } from "../components/header/Header";
import { Message } from "../components/message/Message";
import { minimumWait } from "../services/minimum-wait";
import { NotFoundError } from "../services/errors";
import { PageContainer } from "../components/page-container/PageContainer.styled";
import { StoreContext, StoreProvider} from "../context/StoreContext";
import { theme } from "../styles/theme";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";
import Plus from "../public/images/plus-icon.svg";

const HomePage = () => {
  const state = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [timeEntryMessage, setTimeEntryMessage] = useState<string>();

  async function fetchTimeEntries() {
    const response = await getTimeEntries();

    if (response instanceof NotFoundError) {
      setTimeEntryMessage("Oh no! Something went wrong..");
      return Promise.reject();
    }

    if (response.length === 0) {
      setTimeEntryMessage("No entries found..");
      setTimeEntries(response);
      return Promise.reject();
    }
    setTimeEntries(response);

    return response;
  }

  useEffect(() => {
    setIsLoading(true);
    minimumWait(fetchTimeEntries, () => setIsLoading(false), 500);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeEntrySubmit = (newTimeEntry: TimeEntryInterface) => {
    setIsLoading(true);
    minimumWait(
      async () => {
        await postTimeEntry(newTimeEntry);
        await fetchTimeEntries();
      },
      () => setIsLoading(false),
      500,
    );
  };

  const handleTimeEntryDelete = async (id: number) => {
    await deleteTimeEntry(id);
    await fetchTimeEntries();
  };

  return (
    <StoreProvider>
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
          {isLoading && <Message message="Loading Time Entries..." />}
          {!isLoading && <TimeEntries timeEntries={timeEntries} onDelete={handleTimeEntryDelete} />}
          {!timeEntries.length && <Message message={timeEntryMessage} />}
        </PageContainer>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default HomePage;

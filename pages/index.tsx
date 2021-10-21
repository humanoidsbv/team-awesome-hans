import React, { useContext, useEffect, useState } from "react";

import { Button } from "../components/button/Button";
import { deleteTimeEntry, getTimeEntries, postTimeEntry } from "../services/time-entries-api";
import { EntryForm } from "../components/entry-form/EntryForm";
import { getClients } from "../services/clients-api";
import { Header } from "../components/header/Header";
import { Message } from "../components/message/Message";
import { minimumWait } from "../services/minimum-wait";
import { NotFoundError } from "../services/errors";
import { PageContainer } from "../components/page-container/PageContainer";
import { Select } from "../components/select/Select";
import { StoreContext } from "../context/StoreContext";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";
import Plus from "../public/images/plus-icon.svg";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useContext(StoreContext).timeEntries;
  const [filteredTimeEntries, setFilteredTimeEntries] = useState(timeEntries);
  const [timeEntryMessage, setTimeEntryMessage] = useState<string>();
  const [clients, setClients] = useState([]);
  const [clientFilter, setClientFilter] = useState("");

  const fetchTimeEntries = async () => {
    const response = await getTimeEntries();

    if (response instanceof NotFoundError) {
      setTimeEntryMessage("Oh no! Something went wrong..");
      setIsLoading(false);
      return Promise.reject();
    }

    if (response.length === 0) {
      setTimeEntryMessage("No entries found..");
      setTimeEntries(response);
      setIsLoading(false);
      return Promise.reject();
    }
    setTimeEntries(response);

    return response;
  };

  const fetchClients = async () => {
    const response = await getClients();

    if (response instanceof NotFoundError) {
      setTimeEntryMessage("Oh no! Something went wrong..");
      setIsLoading(false);
      return Promise.reject();
    }

    setClients(response);

    return response;
  };

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

  const filterTimeEntries = (timeEntryList: TimeEntryInterface[]) => {
    if (clientFilter === "") {
      setFilteredTimeEntries(timeEntryList);
      return;
    }

    setFilteredTimeEntries(timeEntryList.filter((timeEntry) => timeEntry.client === clientFilter));
  };

  useEffect(() => {
    fetchTimeEntries();
    fetchClients();
  }, []);

  useEffect(() => {
    filterTimeEntries(timeEntries);
  }, [clientFilter, timeEntries]);

  return (
    <>
      <Header title="Timesheets" subtitle={`${timeEntries?.length} Entries`} />
      <PageContainer>
        {!isOpen && (
          <Button type="button" primary onClick={handleClick}>
            <span>New time entry</span>
            <Plus />
          </Button>
        )}
        <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={handleTimeEntrySubmit} />
        <Select handleFilter={setClientFilter}>
          {clients?.map((client) => (
            <option value={client.name} key={client.id}>
              {client.name}
            </option>
          ))}
        </Select>
        {isLoading && <Message message="Loading Time Entries..." />}
        {!isLoading && (
          <TimeEntries timeEntries={filteredTimeEntries} onDelete={handleTimeEntryDelete} />
        )}
        {!timeEntries.length && <Message message={timeEntryMessage} />}
      </PageContainer>
    </>
  );
};

export default HomePage;

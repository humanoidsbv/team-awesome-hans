import React from "react";

import { EntryCard } from "../EntryCard/EntryCard";
import { EntryDate } from "../EntryDate/EntryDate";
import * as Styled from "./TimeEntry.styled";

interface TimeEntryProps {
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  return (
    <Styled.TimeEntry>
      <EntryDate startTimestamp={startTimestamp} />
      <EntryCard client={client} startTimestamp={startTimestamp} stopTimestamp={stopTimestamp} />
    </Styled.TimeEntry>
  );
};

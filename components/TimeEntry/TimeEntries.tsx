import React from "react";

import { ITimeEntry } from "../../fixtures/time-entries";
import { TimeEntry } from "./TimeEntry/TimeEntry";

interface TimeEntriesProps {
  timeEntries: ITimeEntry[];
}

export const TimeEntries = ({ timeEntries }: TimeEntriesProps) => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntry
          client={timeEntry.client}
          startTimestamp={timeEntry.startTimestamp}
          stopTimestamp={timeEntry.stopTimestamp}
        />
      ))}
    </>
  );
};

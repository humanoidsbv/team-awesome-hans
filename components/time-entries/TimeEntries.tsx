import React from "react";

import { EntryDate } from "../entry-date/EntryDate";
import { getDate } from "../../services/date";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryContainer } from "./TimeEntries.styled";
import { TimeEntryInterface } from "../../fixtures/time-entries";

interface TimeEntriesProps {
  onDelete: (id: number) => Promise<void>;
  timeEntries: TimeEntryInterface[];
}

export const TimeEntries = ({ onDelete, timeEntries }: TimeEntriesProps) => {
  return (
    <>
      {timeEntries?.map((timeEntry, i) => {
        const currentDate = getDate(timeEntry.startTime);
        const nextDate = getDate(timeEntries[i + 1]?.startTime);
        const previousDate = getDate(timeEntries[i - 1]?.startTime);

        const isBottom = currentDate !== nextDate && currentDate === previousDate;
        const isMiddle = currentDate === nextDate && currentDate === previousDate;
        const isTop = currentDate === nextDate && currentDate !== previousDate;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== previousDate) && (
              <EntryDate startDate={timeEntry.startTime} />
            )}
            <TimeEntryContainer isBottom={isBottom} isMiddle={isMiddle} isTop={isTop}>
              <TimeEntry
                isBottom={isBottom}
                isMiddle={isMiddle}
                isTop={isTop}
                onDelete={onDelete}
                timeEntry={timeEntry}
              />
            </TimeEntryContainer>
          </React.Fragment>
        );
      })}
    </>
  );
};

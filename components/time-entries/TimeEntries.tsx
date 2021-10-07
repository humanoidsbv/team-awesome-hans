import React from "react";

import { EntryDate } from "../entry-date/EntryDate";
import { TimeEntryInterface } from "../../fixtures/time-entries";
import { getDate } from "../../services/date";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryContainer } from "./TimeEntries.styled";

interface TimeEntriesProps {
  timeEntries: TimeEntryInterface[];
  onDelete: (id: number) => Promise<void>;
}

export const TimeEntries = ({ timeEntries, onDelete }: TimeEntriesProps) => {
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
                client={timeEntry.client}
                id={timeEntry.id}
                isBottom={isBottom}
                isMiddle={isMiddle}
                isTop={isTop}
                onDelete={onDelete}
                startDate={timeEntry.startTime}
                stopDate={timeEntry.endTime}
              />
            </TimeEntryContainer>
          </React.Fragment>
        );
      })}
    </>
  );
};

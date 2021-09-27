import React from "react";

import { EntryDate } from "../entry-date/EntryDate";
import { getDate } from "../../services/date";
import { ITimeEntry } from "../../fixtures/time-entries";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryContainer } from "./TimeEntries.styled";

interface TimeEntriesProps {
  timeEntries: ITimeEntry[];
}

export const TimeEntries = ({ timeEntries }: TimeEntriesProps) => {
  return (
    <>
      {timeEntries.map((timeEntry, i) => {
        const currentDate = getDate(timeEntry.startTimestamp);
        const nextDate = getDate(timeEntries[i + 1]?.startTimestamp);
        const previousDate = getDate(timeEntries[i - 1]?.startTimestamp);

        const isBottom = currentDate !== nextDate && currentDate === previousDate;
        const isMiddle = currentDate === nextDate && currentDate === previousDate;
        const isTop = currentDate === nextDate && currentDate !== previousDate;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== previousDate) && (
              <EntryDate startDate={timeEntry.startTimestamp} />
            )}
            <TimeEntryContainer isBottom={isBottom} isMiddle={isMiddle} isTop={isTop}>
              <TimeEntry
                client={timeEntry.client}
                isBottom={isBottom}
                isMiddle={isMiddle}
                isTop={isTop}
                startDate={timeEntry.startTimestamp}
                stopDate={timeEntry.stopTimestamp}
              />
            </TimeEntryContainer>
          </React.Fragment>
        );
      })}
    </>
  );
};

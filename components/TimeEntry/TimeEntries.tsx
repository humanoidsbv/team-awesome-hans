import React from "react";

import { ITimeEntry } from "../../fixtures/time-entries";
import { EntryDate } from "./EntryDate/EntryDate";
import { EntryCard } from "./EntryCard/EntryCard";
import { getDate } from "../../sevices/date";

interface TimeEntriesProps {
  timeEntries: ITimeEntry[];
}

export const TimeEntries = ({ timeEntries }: TimeEntriesProps) => {
  return timeEntries.map((timeEntry, i, array) => {
    const currentDate = getDate(timeEntry.startTimestamp);
    const previousDate = getDate(array[i - 1]?.startTimestamp);
    const nextDate = getDate(array[i + 1]?.startTimestamp);

    const isTop = currentDate === nextDate && currentDate !== previousDate;
    const isMiddle = currentDate === nextDate && currentDate === previousDate;
    const isBottom = currentDate !== nextDate && currentDate === previousDate;

    const border = isTop ? "isTop" : isMiddle ? "isMiddle" : isBottom && "isBottom";

    return (
      <>
        {(i === 0 || currentDate !== previousDate) && (
          <EntryDate startDate={timeEntry.startTimestamp} />
        )}
        <EntryCard
          client={timeEntry.client}
          startDate={timeEntry.startTimestamp}
          stopDate={timeEntry.stopTimestamp}
          border={border}
        />
      </>
    );
  });
};

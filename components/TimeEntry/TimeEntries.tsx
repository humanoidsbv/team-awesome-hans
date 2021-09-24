import React from "react";

import { ITimeEntry } from "../../fixtures/time-entries";
import { EntryDate } from "./EntryDate/EntryDate";
import { EntryCard } from "./EntryCard/EntryCard";

interface TimeEntriesProps {
  timeEntries: ITimeEntry[];
}

export const TimeEntries = ({ timeEntries }: TimeEntriesProps) => {
  const timeZone = "nl-NL";
  const dateFormat: object = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return timeEntries.map((timeEntry, i, array) => {
    const currentDate = new Date(timeEntry.startTimestamp).toLocaleDateString(timeZone, dateFormat);

    const isTop =
      currentDate ===
        new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
      currentDate !==
        new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

    const isMiddle =
      currentDate ===
        new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
      currentDate ===
        new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

    const isBottom =
      currentDate !==
        new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
      currentDate ===
        new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

    const borderState = isTop
      ? "isTop"
      : isMiddle
      ? "isMiddle"
      : isBottom
      ? "isBottom"
      : "isSingle";

    return (
      <>
        {(i === 0 ||
          currentDate !==
            new Date(array[i - 1].startTimestamp).toLocaleDateString(timeZone, dateFormat)) && (
          <EntryDate startDate={timeEntry.startTimestamp} />
        )}
        <EntryCard
          client={timeEntry.client}
          startDate={timeEntry.startTimestamp}
          stopDate={timeEntry.stopTimestamp}
          borderState={borderState}
        />
      </>
    );
  });
};

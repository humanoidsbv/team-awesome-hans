import React from "react";

import { getDateTime } from "../../services/date";
import { TimeEntryInterface } from "../../fixtures/time-entries";
import * as Styled from "./TimeEntry.styled";
import DeleteIcon from "../../public/images/delete.svg";

interface TimeEntryProps {
  isBottom: boolean;
  isMiddle: boolean;
  isTop: boolean;
  onDelete: (id: number) => Promise<void>;
  timeEntry: TimeEntryInterface;
}

export const TimeEntry = ({ isBottom, isMiddle, isTop, onDelete, timeEntry }: TimeEntryProps) => {
  const startTime = getDateTime(timeEntry.startTime);
  const stopTime = getDateTime(timeEntry.endTime);

  return (
    <Styled.TimeEntry isBottom={isBottom} isMiddle={isMiddle} isTop={isTop}>
      <span className="client">{timeEntry.client}</span>
      <Styled.DeleteTimeEntryButton
        className="delete-button"
        onClick={() => onDelete(timeEntry.id)}
        type="button"
      >
        <DeleteIcon className="delete" />
        Delete
      </Styled.DeleteTimeEntryButton>
      <span>
        {startTime} - {stopTime} {/* eslint-disable-line */}
      </span>
    </Styled.TimeEntry>
  );
};

import React from "react";

import { getDateTime } from "../../services/date";
import * as Styled from "./TimeEntry.styled";
import DeleteIcon from "../../public/images/delete.svg";

interface TimeEntryProps {
  id: number;
  client: string;
  isBottom: boolean;
  isMiddle: boolean;
  isTop: boolean;
  onDelete: (id: number) => Promise<void>;
  startDate: string;
  stopDate: string;
}

export const TimeEntry = ({
  id,
  client,
  isBottom,
  isMiddle,
  isTop,
  onDelete,
  startDate,
  stopDate,
}: TimeEntryProps) => {
  const startTime = getDateTime(startDate);
  const stopTime = getDateTime(stopDate);

  return (
    <Styled.TimeEntry isBottom={isBottom} isMiddle={isMiddle} isTop={isTop}>
      <span className="client">{client}</span>
      <Styled.DeleteTimeEntryButton
        className="delete-button"
        onClick={() => onDelete(id)}
        type="button"
      >
        <DeleteIcon className="delete" />
        Delete
      </Styled.DeleteTimeEntryButton>
      <span>
        {/* eslint-disable */}
        {startTime} - {stopTime}
        {/* eslint-enable */}
      </span>
    </Styled.TimeEntry>
  );
};

import React from "react";

import { getDateTime } from "../../services/date";
import * as Styled from "./TimeEntry.styled";

interface TimeEntryProps {
  client: string;
  isBottom: boolean;
  isMiddle: boolean;
  isTop: boolean;
  startDate: string;
  stopDate: string;
}

export const TimeEntry = ({
  client,
  isBottom,
  isMiddle,
  isTop,
  startDate,
  stopDate,
}: TimeEntryProps) => {
  const startTime = getDateTime(startDate);
  const stopTime = getDateTime(stopDate);
  return (
    <Styled.TimeEntry isBottom={isBottom} isMiddle={isMiddle} isTop={isTop}>
      <span>{client}</span>
      <span>
        {/* eslint-disable */}
        {startTime} - {stopTime}
        {/* eslint-enable */}
      </span>
    </Styled.TimeEntry>
  );
};

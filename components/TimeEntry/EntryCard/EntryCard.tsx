import React from "react";
import { getDateTime } from "../../../sevices/date";

import * as Styled from "./EntryCard.styled";

interface EntryCardProps {
  startDate: string;
  stopDate: string;
  client: string;
  border: string;
}

export const EntryCard = ({ client, startDate, stopDate, border }: EntryCardProps) => {
  const startTime = getDateTime(startDate);
  const stopTime = getDateTime(stopDate);
  return (
    <>
      <Styled.EntryCard border={border}>
        <span>{client}</span>
        <span>
          {startTime} - {stopTime}
        </span>
      </Styled.EntryCard>
    </>
  );
};

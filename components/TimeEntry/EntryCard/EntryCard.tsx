import React from "react";

import * as Styled from "./EntryCard.styled";

interface EntryCardProps {
  startDate: string;
  stopDate: string;
  client: string;
  borderState: string;
}

export const EntryCard = ({ client, startDate, stopDate, borderState }: EntryCardProps) => {
  const dateStart = new Date(startDate);
  const dateStop = new Date(stopDate);
  const formattedStartTime = dateStart.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedStopTime = dateStop.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      {}
      <Styled.EntryCard borderState={borderState}>
        <span>{client}</span>
        <span>
          {formattedStartTime}-{formattedStopTime}
        </span>
      </Styled.EntryCard>
    </>
  );
};

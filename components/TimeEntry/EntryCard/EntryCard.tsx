import React from "react";

import * as Styled from "./EntryCard.styled";

interface EntryCardProps {
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}
export const EntryCard = ({ client, startTimestamp, stopTimestamp }: EntryCardProps) => {
  const dateStart = new Date(startTimestamp);
  const dateStop = new Date(stopTimestamp);
  const formattedStartTime = dateStart.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedStopTime = dateStop.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Styled.EntryCard>
      <span>{client}</span>
      <span>
        {formattedStartTime} - {formattedStopTime}
      </span>
    </Styled.EntryCard>
  );
};

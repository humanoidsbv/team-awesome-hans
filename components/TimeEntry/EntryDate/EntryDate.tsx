import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  startTimestamp: string;
}

export const EntryDate = ({ startTimestamp }: EntryDateProps) => {
  const date = new Date(startTimestamp);
  const currentDayOfMonth = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const dateString = `${currentDayOfMonth}-${currentMonth}-${currentYear}`;

  return <Styled.EntryDate>{dateString}</Styled.EntryDate>;
};

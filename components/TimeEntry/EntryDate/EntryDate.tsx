import React from "react";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  startDate: string;
}

export const EntryDate = ({ startDate }: EntryDateProps) => {
  const date = new Date(startDate);
  const formatedCurrentDate = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return <Styled.EntryDate>{formatedCurrentDate}</Styled.EntryDate>;
};

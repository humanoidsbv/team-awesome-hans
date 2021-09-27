import React from "react";
import { getDate } from "../../../sevices/date";

import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  startDate: string;
}

export const EntryDate = ({ startDate }: EntryDateProps) => {
  const date = getDate(startDate);
  return <Styled.EntryDate>{date}</Styled.EntryDate>;
};

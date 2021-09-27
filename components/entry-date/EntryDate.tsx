import React from "react";

import { getDate } from "../../services/date";
import * as Styled from "./EntryDate.styled";

interface EntryDateProps {
  startDate: string;
}

export const EntryDate = ({ startDate }: EntryDateProps) => {
  return <Styled.EntryDate>{getDate(startDate)}</Styled.EntryDate>;
};

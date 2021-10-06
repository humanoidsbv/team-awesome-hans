import React from "react";

import * as Styled from "./NoTimeEntries.styled";

interface NoTimeEntriesProps {
	message: string;
}

export const NoTimeEntries = ({ message }: NoTimeEntriesProps) => {
  return <Styled.NoTimeEntries>{message}</Styled.NoTimeEntries>;
};

import React from "react";

import * as Styled from "./Message.styled";

interface MessageProps {
  message: string;
}

export const Message = ({ message }: MessageProps) => {
  return <Styled.Message>{message}</Styled.Message>;
};

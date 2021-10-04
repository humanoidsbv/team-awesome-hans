import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <>
      <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
    </>
  );
};

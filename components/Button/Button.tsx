import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <>
      {type === "primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick} />
      )}
    </>
  );
};

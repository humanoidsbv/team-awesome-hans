import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "Primary" | "Secondary";
}

export const Button = ({ onClick, type, children }: ButtonProps) => {
  return (
    <>
      {type === "Primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick} />
      )}
    </>
  );
};

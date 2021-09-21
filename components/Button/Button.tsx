import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "Primary" | "Secondary";
  children?;
}

export const Button = ({ onClick, type = "Primary", children }: ButtonProps) => {
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

import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  form?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  disabled,
  form,
  onClick,
  primary,
  secondary,
  tertiary,
  type,
}: ButtonProps) => {
  return (
    <>
      <Styled.Button
        disabled={disabled}
        form={form}
        onClick={onClick}
        primary={primary}
        secondary={secondary}
        tertiary={tertiary}
        type={type}
      >
        {children}
      </Styled.Button>
    </>
  );
};

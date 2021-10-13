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
      {primary && (
        <Styled.Primary onClick={onClick} type={type}>
          {children}
        </Styled.Primary>
      )}
      {secondary && (
        <Styled.Secondary onClick={onClick} type={type}>
          {children}
        </Styled.Secondary>
      )}
      {tertiary && (
        <Styled.Tertiary disabled={disabled} form={form} onClick={onClick} type={type}>
          {children}
        </Styled.Tertiary>
      )}
    </>
  );
};

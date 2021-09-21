import React from "react";

import * as Styled from "./DrawerButton.styled";

interface HeaderProps {
  onClick?: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const DrawerButton = ({ onClick, isOpen }: HeaderProps) => {
  return <Styled.DrawerButton onClick={() => onClick(isOpen)} isOpen={isOpen} />;
};

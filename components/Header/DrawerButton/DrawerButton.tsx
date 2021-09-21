import React from "react";

import * as Styled from "./DrawerButton.styled";

interface HeaderProps {
  isOpen: boolean;
  onClick?: (isOpen: boolean) => void;
}

export const DrawerButton = ({ onClick, isOpen }: HeaderProps) => {
  return <Styled.DrawerButton onClick={() => onClick(isOpen)} isOpen={isOpen} />;
};

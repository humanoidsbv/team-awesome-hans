import React from "react";

import * as Styled from "./DrawerButton.styled";

interface HeaderProps {
  isOpen: boolean;
  onClick?: (isOpen: boolean) => void;
}

export const DrawerButton = ({ isOpen, onClick }: HeaderProps) => {
  return (
    <Styled.DrawerButton data-cy="drawer-button" onClick={() => onClick(isOpen)} isOpen={isOpen} />
  );
};

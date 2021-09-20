import React from "react";

import * as Styled from "./DrawerButton.styled";

interface HeaderProps {
  onClick?: (isOpen: boolean) => void;
  isOpen: boolean;
}

const DrawerButton = ({ onClick, isOpen }: HeaderProps) => {
  return <Styled.DrawerButton onClick={() => onClick(isOpen)} isOpen={isOpen} />;
};

export default DrawerButton;

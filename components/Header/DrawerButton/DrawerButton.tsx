import React from "react";

import * as Styled from "./DrawerButton.styled";

interface HeaderProps {
  isOpen: boolean;
  handleClick?: (isOpen: boolean) => void;
}

const DrawerButton = ({ handleClick, isOpen }: HeaderProps) => {
  return <Styled.DrawerButton onClick={() => handleClick(isOpen)} isOpen={isOpen} />;
};

export default DrawerButton;

import React, { useState } from "react";

import * as Styled from "./Header.styled";
import DrawerButton from "./DrawerButton/DrawerButton";
import DrawerContent from "./DrawerContent/DrawerContent";
import UserButton from "./UserButton/UserButton";
import { ArrowDown } from "./UserButton/UserButton.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Styled.Header isOpen={isOpen}>
      <Styled.HeaderTitle>Team Awesome</Styled.HeaderTitle>
      <DrawerButton isOpen={isOpen} onClick={handleClick} />
      <DrawerContent isOpen={isOpen} />
      <UserButton />
      <ArrowDown src="/img/arrow-down.svg" />
    </Styled.Header>
  );
};

export default Header;

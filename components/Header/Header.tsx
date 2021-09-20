import React, { useState } from "react";

import HeaderTitle from "./HeaderTitle.styled";
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
      <HeaderTitle>Team Awesome</HeaderTitle>
      <DrawerButton isOpen={isOpen} handleClick={handleClick} />
      <DrawerContent isOpen={isOpen} />
      <UserButton />
      <ArrowDown src="/img/arrow-down.svg" />
    </Styled.Header>
  );
};

export default Header;

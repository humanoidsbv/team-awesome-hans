import React, { useState } from "react";

import * as Styled from "./Header.styled";
import { DrawerButton } from "./DrawerButton/DrawerButton";
import { DrawerContent } from "./DrawerContent/DrawerContent";
import { UserButton } from "./UserButton/UserButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <Styled.Header isOpen={isOpen}>
        <Styled.HeaderTitle>team awesome</Styled.HeaderTitle>
        <DrawerButton isOpen={isOpen} onClick={handleClick} />
        <DrawerContent isOpen={isOpen} />
        <UserButton />
      </Styled.Header>
    </div>
  );
};

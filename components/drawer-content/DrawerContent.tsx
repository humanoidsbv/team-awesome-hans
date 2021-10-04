import React, { useState } from "react";

import * as Styled from "./DrawerContent.styled";

interface HeaderProps {
  isOpen: boolean;
}

export const DrawerContent = ({ isOpen }: HeaderProps) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => setActive(!isActive);

  return (
    <Styled.DrawerContent isOpen={isOpen}>
      <Styled.DrawerContentItemList>
        <li>
          <Styled.DrawerContentItem onClick={handleClick} isActive={isActive}>
            Timesheets
          </Styled.DrawerContentItem>
        </li>
        <li>
          <Styled.DrawerContentItem>Team members</Styled.DrawerContentItem>
        </li>
        <li>
          <Styled.DrawerContentItem>Projects</Styled.DrawerContentItem>
        </li>
        <li>
          <Styled.DrawerContentItem>Clients</Styled.DrawerContentItem>
        </li>
        <li>
          <Styled.DrawerContentItem>Documents</Styled.DrawerContentItem>
        </li>
      </Styled.DrawerContentItemList>
    </Styled.DrawerContent>
  );
};

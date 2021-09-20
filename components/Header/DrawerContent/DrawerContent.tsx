import React from "react";

import * as Styled from "./DrawerContent.styled";

interface HeaderProps {
  isOpen: boolean;
}

const DrawerContent = ({ isOpen }: HeaderProps) => {
  return (
    <Styled.DrawerContent isOpen={isOpen}>
      <Styled.DrawerContentItemList>
        <li>
          <Styled.DrawerContentItem backgroundColor="hotpink" borderRadius="4px">
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

export default DrawerContent;

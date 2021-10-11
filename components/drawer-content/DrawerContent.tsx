import Link from "next/link";
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
          <Link href="/">
            <Styled.DrawerContentItem onClick={handleClick} isActive={isActive}>
              Timesheets
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/team-members">
            <Styled.DrawerContentItem>Team members</Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Styled.DrawerContentItem>Projects</Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <Styled.DrawerContentItem>Clients</Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/document">
            <Styled.DrawerContentItem>Documents</Styled.DrawerContentItem>
          </Link>
        </li>
      </Styled.DrawerContentItemList>
    </Styled.DrawerContent>
  );
};

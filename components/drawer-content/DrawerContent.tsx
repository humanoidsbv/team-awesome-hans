import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

import * as Styled from "./DrawerContent.styled";

interface HeaderProps {
  isOpen: boolean;
}

export const DrawerContent = ({ isOpen }: HeaderProps) => {
  const [isActive, setActive] = useState(false);
  const router = useRouter();
  const handleClick = () => setActive(!isActive);

  return (
    <Styled.DrawerContent isOpen={isOpen}>
      <Styled.DrawerContentItemList>
        <li>
          <Link href="/">
            <Styled.DrawerContentItem
              isActive={router.pathname === "/" ? "isActive" : ""}
              onClick={handleClick}
            >
              Timesheets
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/team-members">
            <Styled.DrawerContentItem
              isActive={router.pathname === "/team-members" ? "isActive" : ""}
            >
              Team members
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Styled.DrawerContentItem isActive={router.pathname === "/projects" ? "isActive" : ""}>
              Projects
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <Styled.DrawerContentItem isActive={router.pathname === "/clients" ? "isActive" : ""}>
              Clients
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/document">
            <Styled.DrawerContentItem isActive={router.pathname === "/document" ? "isActive" : ""}>
              Documents
            </Styled.DrawerContentItem>
          </Link>
        </li>
      </Styled.DrawerContentItemList>
    </Styled.DrawerContent>
  );
};

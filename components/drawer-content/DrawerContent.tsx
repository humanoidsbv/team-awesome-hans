import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

import * as Styled from "./DrawerContent.styled";

interface HeaderProps {
  isOpen: boolean;
}

export const DrawerContent = ({ isOpen }: HeaderProps) => {
  const router = useRouter();

  return (
    <Styled.DrawerContent isOpen={isOpen}>
      <Styled.DrawerContentItemList>
        <li>
          <Link href="/">
            <Styled.DrawerContentItem isActive={router.pathname === "/"}>
              Timesheets
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/team-members">
            <Styled.DrawerContentItem
              data-cy="team-members-page"
              isActive={router.pathname === "/team-members"}
            >
              Team members
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Styled.DrawerContentItem isActive={router.pathname === "/projects"}>
              Projects
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <Styled.DrawerContentItem isActive={router.pathname === "/clients"}>
              Clients
            </Styled.DrawerContentItem>
          </Link>
        </li>
        <li>
          <Link href="/document">
            <Styled.DrawerContentItem isActive={router.pathname === "/document"}>
              Documents
            </Styled.DrawerContentItem>
          </Link>
        </li>
      </Styled.DrawerContentItemList>
    </Styled.DrawerContent>
  );
};

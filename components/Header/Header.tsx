import React, { useState } from "react";

import { DrawerButton } from "../drawer-button/DrawerButton";
import { DrawerContent } from "../drawer-content/DrawerContent";
import { UserButton } from "../user-button/UserButton";
import * as Styled from "./Header.styled";

interface HeaderProps {
  entryCount: number;
}

export const Header = ({ entryCount }: HeaderProps) => {
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
      <Styled.PageHeader>
        <span>Timesheets</span>
        <div className="divider" />
        {/* eslint-disable */}
        <span className="entry-counter">{entryCount} Entries</span>
        {/* eslint-enable */}
      </Styled.PageHeader>
    </div>
  );
};

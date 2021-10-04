import React, { useState } from "react";

import ArrowDown from "../../public/images/arrow-down.svg";
import { DrawerButton } from "../drawer-button/DrawerButton";
import { DrawerContent } from "../drawer-content/DrawerContent";
import { UserButton } from "../user-button/UserButton";
import * as Styled from "./Header.styled";

interface HeaderProps {
  count: number;
  subTitle: string;
  title: string;
}

export const Header = ({ count, subTitle, title }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <Styled.Header isOpen={isOpen}>
        <Styled.HeaderTitle>team awesome</Styled.HeaderTitle>
        <DrawerButton isOpen={isOpen} onClick={handleClick} />
        <DrawerContent isOpen={isOpen} />
        <UserButton />
        <ArrowDown className="arrow-down-icon" />
      </Styled.Header>
      <Styled.PageHeader>
        <span>{title}</span>
        <div className="divider" />
        <span className="entry-counter">
          {count}
          {` `}
          {subTitle}
        </span>
      </Styled.PageHeader>
    </div>
  );
};

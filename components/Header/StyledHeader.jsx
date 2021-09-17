import React, { useState } from "react";

import HeaderTitle from "./HeaderTitle.style";
import StyledHeader from "./StyledHeader.style";
import DrawerButton from "./DrawerButton/DrawerButton";
import DrawerContent from "./DrawerContent/DrawerContent";
import UserButton from "./UserButton/UserButton";
import { ArrowDown } from "./UserButton/UserButton.style";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return(
        <StyledHeader isOpen= {isOpen}>
            <HeaderTitle>Team Awesome</HeaderTitle>
            <DrawerButton isOpen={isOpen} handleClick={handleClick}/>
            <DrawerContent isOpen={isOpen}/>
            <UserButton />
            <ArrowDown src="/img/arrow-down.svg"/>
        </StyledHeader>
    );
}

export default Header;

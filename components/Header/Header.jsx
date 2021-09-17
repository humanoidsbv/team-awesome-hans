import React from "react";
import { useState } from 'react';
import HeaderTitle from "./HeaderTitle.style";
import HeaderMobile from "./HeaderMobile.style";
import DrawerButton from "./DrawerButton/DrawerButton";
import DrawerContent from "./DrawerContent/DrawerContent";

function Header(){
    const [isOpen, setIsOpen] = useState(false); // False is the starting value
    const handleClick = () => setIsOpen(!isOpen); // Update the state and re-render the 

    return(
        <HeaderMobile isOpen= {isOpen}>
            <HeaderTitle>Team Awesome</HeaderTitle>
            <DrawerButton isOpen={isOpen} handleClick={handleClick}/>
            <DrawerContent isOpen={isOpen}/>
        </HeaderMobile>
    );
}

export default Header;

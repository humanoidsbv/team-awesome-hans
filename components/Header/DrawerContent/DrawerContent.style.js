import styled from "styled-components";

export const DrawerContent = styled.nav`
    background-color: #4f88ef;
    display: ${(props) => props.isOpen ? "flex" : "none"};
    font-family: ProximaNova;
    font-size: 24px;
    justify-content: center;
    padding-top: 50px;
    text-align: center;
    width: 100%;
`

export const DrawerContentItemList = styled.ul`
    list-style-type: none;
    margin-block-end: 0;
    margin-block-start: 0;
    padding: 0;
`

export const DrawerContentItem = styled.a`
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => props.borderRadius};
    color: white;
    display: inline-block;
    margin-bottom: 44px;
    padding: 3px 12px;
    text-decoration: none;
`

export default DrawerContent;

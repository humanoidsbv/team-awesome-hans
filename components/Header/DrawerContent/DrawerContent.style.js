import styled from "styled-components";

export const DrawerContent = styled.nav`
    background-color: #4f88ef;
    display: ${(props) => props.isOpen ? "flex" : "none"};
    font-family: Proxima Nova;
    font-size: 24px;
    justify-content: center;
    padding-top: 50px;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: column;
        padding: 0;
    }
`

export const DrawerContentItemList = styled.ul`
    list-style-type: none;
    margin-block-end: 0;
    margin-block-start: 0;
    padding: 0;

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

export const DrawerContentItem = styled.a`
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => props.borderRadius};
    color: white;
    display: inline-block;
    margin-bottom: 44px;
    padding: 3px 12px;
    text-decoration: none;

    @media screen and (min-width: 1024px){
        font-size: 14px;
        margin: 0 12px;
        padding: 8px 18px;
    }
`

export default DrawerContent;

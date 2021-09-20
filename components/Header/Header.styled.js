import styled from "styled-components";

export const Header = styled.header`
    background-color: #4f88ef;
    display: flex;
    flex-direction: column;
    height:${(props) => props.isOpen ? "100vh" : "70px"};
    overflow: hidden;
    transition: all 0.3s ease-out;

    @media screen and (min-width: 1024px){
        justify-content: center;
    }
`

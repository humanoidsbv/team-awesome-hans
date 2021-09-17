import styled from "styled-components";

const HeaderMobile = styled.header`
    background-color: #4f88ef;
    display: flex;
    flex-direction: column;
    height:${(props) => props.isOpen ? "100vh" : "70px"};
`

export default HeaderMobile;

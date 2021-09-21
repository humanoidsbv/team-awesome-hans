import styled from "styled-components";

export const Header = styled.header<{ isOpen: boolean }>`
  background-color: #4f88ef;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${(props) => (props.isOpen ? "100vh" : "70px")};
  overflow: hidden;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-family: "Bello Script";
  font-size: 26px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

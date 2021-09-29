import styled from "styled-components";

export const Header = styled.header<{ isOpen: boolean }>`
  background-color: #4f88ef;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isOpen ? "100vh" : "70px")};
  overflow: hidden;
  transition: all 0.3s ease-out;
  width: 100%;

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

export const PageHeader = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    align-items: center;
    border-bottom: solid 1px #e6eaee;
    display: flex;
    height: 70px;
    padding: 0 30px;
  }

  .divider {
    background: #dfe3e9;
    height: 14px;
    margin: 0 14px;
    width: 1px;
  }

  .entry-counter {
    color: #7f8fa4;
    font-size: 14px;
  }
`;

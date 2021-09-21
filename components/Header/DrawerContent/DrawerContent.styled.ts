import styled from "styled-components";

export const DrawerContent = styled.nav<{ isOpen: boolean }>`
  background-color: #4f88ef;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  font-family: "Proxima Nova";
  font-size: 24px;
  justify-content: center;
  padding-top: 50px;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
  }

  ul {
    flex: 1;
  }

  div {
    margin: 0 30px 0 5px;
  }
`;

export const DrawerContentItemList = styled.ul`
  list-style-type: none;
  margin-block-end: 0;
  margin-block-start: 0;
  padding: 0;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const DrawerContentItem = styled.a<{ isActive?: boolean }>`
  background-color: ${(props) => (props.isActive ? "hotpink" : "none")};
  border-radius: ${(props) => (props.isActive ? "4px" : "none")};
  color: white;
  display: inline-block;
  margin-bottom: 44px;
  padding: 3px 12px;
  text-decoration: none;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    margin: 0 12px;
    padding: 8px 18px;
  }
`;

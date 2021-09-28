import styled from "styled-components";

export const DrawerButton = styled.button<{ isOpen: boolean }>`
  background: url(${(props) => (props.isOpen ? "/images/shape.svg" : "/images/group.svg")})
    no-repeat center;
  padding: 10px;
  position: absolute;
  right: 18px;
  top: 24px;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

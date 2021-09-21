import styled from "styled-components";

export const UserButton = styled.button`
  display: none;

  @media screen and (min-width: 1024px) {
    align-items: center;
    background-color: white;
    border-radius: 18px;
    border: none;
    display: flex;
    height: 36px;
    margin: 18px 46px;
    position: absolute;
    right: 0px;
    width: 135px;
  }
`;

export const Logo = styled.img`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 10px;
    left: 12px;
    position: absolute;
    width: 75px;
  }
`;

export const UserIcon = styled.img`
  display: none;

  @media screen and (min-width: 1024px) {
    border-radius: 90px;
    display: flex;
    height: 32px;
    position: absolute;
    right: 2px;
    width: 32px;
  }
`;

export const ArrowDown = styled.img`
  display: none;

  @media screen and (min-width: 1024px) {
    border-radius: 90px;
    display: flex;
    height: 8px;
    position: absolute;
    right: 30px;
    width: 8px;
  }
`;

import styled from "styled-components";

interface ButtonProps {
  primary: boolean;
  secondary: boolean;
  tertiary: boolean;
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 4px;
  color: white;
  display: none;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  width: 140px;

  ${(props) =>
    props.primary &&
    `
    background-image: linear-gradient(#39b54a, #34aa44);
    border: solid 1px #249533;
    display: flex;
    padding: 10px;
    width: 100%;

    @media (${({ theme }) => theme.desktop}) {
        display: none;
      }
    `}

  ${(props) =>
    props.secondary &&
    `
    background: #f5f7f9;
    border: solid 1px #ced0da;
    color: #4b5464;
    `}

    ${(props) =>
    props.tertiary &&
    `
    background-image: linear-gradient(#39b54a, #34aa44);
    border: solid 1px #249533;
    margin-left: 16px;
    `}

  ${(props) =>
    props.disabled &&
    `
      background: #cccccc;
      border: 1px solid #999999;
      color: #666666;
    `}

  span {
    flex: 1;
  }

  @media (${({ theme }) => theme.desktop}) {
    ${(props) =>
      props.primary &&
      `
      display: none;
      `}

    ${(props) =>
      props.secondary &&
      `
      display: flex;
      `}

    ${(props) =>
      props.tertiary &&
      `
      display: flex;
      `}
  }
`;

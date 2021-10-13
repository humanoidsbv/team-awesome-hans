import styled from "styled-components";

export const Primary = styled.button`
  align-items: center;
  background-image: linear-gradient(#39b54a, #34aa44);
  border: solid 1px #249533;
  border-radius: 4px;
  color: white;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px;
  width: 100%;

  span {
    flex: 1;
  }

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const Secondary = styled.button`
  align-items: center;
  background: #f5f7f9;
  border: solid 1px #ced0da;
  border-radius: 4px;
  color: #4b5464;
  display: none;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  width: 140px;

  span {
    flex: 1;
  }

  @media (${({ theme }) => theme.desktop}) {
    display: flex;
  }
`;

export const Tertiary = styled.button<{ disabled: boolean }>`
  align-items: center;
  background-image: linear-gradient(#39b54a, #34aa44);
  border: solid 1px #249533;
  border-radius: 4px;
  color: white;
  display: none;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  margin-left: 16px;
  width: 140px;

  span {
    flex: 1;
  }

  ${(props) =>
    props.disabled &&
    `
      background: #cccccc;
      border: 1px solid #999999;
      color: #666666;
    `}

  @media (${({ theme }) => theme.desktop}) {
    display: flex;
  }
`;

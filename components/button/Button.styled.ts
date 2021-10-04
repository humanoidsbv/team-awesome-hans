import styled from "styled-components";

export const Primary = styled.button`
  align-items: center;
  background-image: linear-gradient(#39b54a, #34aa44);
  border: solid 1px #249533;
  border-radius: 4px;
  color: white;
  display: flex;
  font-family: "Proxima Nova";
  font-size: 14px;
  justify-content: center;
  padding: 10px;
  width: 100%;

  span {
    flex: 1;
  }
`;

export const Secondary = styled.button`
  background-color: red;
`;

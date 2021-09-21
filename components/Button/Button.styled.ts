import styled from "styled-components";

export const Primary = styled.button`
  color: white;
  font-family: "Proxima Nova";
  background-image: linear-gradient(#39b54a, #34aa44);
  border: solid 1px #249533;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  width: 100vw;
  font-size: 14px;
  justify-content: center;
  align-items: center;

  span {
    flex: 1;
  }
`;

export const Secondary = styled.button`
  width: 90vw;
  background-color: red;
`;

import styled from "styled-components";

export const EntryCard = styled.div<{ border: string }>`
  background-color: #fff;
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  color: #354052;
  display: flex;
  font-family: "Proxima Nova";
  justify-content: space-between;
  padding: 30px 16px;

  ${(props) =>
    props.border === "isBottom" &&
    `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 0;
    border-top: 0;
  `}

  ${(props) =>
    props.border === "isMiddle" &&
    `
    border-radius: 0;
    
  `}

  ${(props) =>
    props.border === "isTop" &&
    `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom: 0;
  `}
`;

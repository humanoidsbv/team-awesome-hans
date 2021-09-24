import styled from "styled-components";

export const EntryCard = styled.div`
  background-color: #fff;
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  color: #354052;
  display: flex;
  font-family: "Proxima Nova";
  justify-content: space-between;
  padding: 30px 16px;

  ${(props) =>
    props.borderState === "isSingle" &&
    `
    border-radius: 4px;
  `}

  ${(props) =>
    props.borderState === "isMiddle" &&
    `
    border-top: 0px;
    border-bottom: 0px;
  `}

  ${(props) =>
    props.borderState === "isBottom" &&
    `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}

  ${(props) =>
    props.borderState === "isTop" &&
    `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}
`;

import styled from "styled-components";

export const TimeEntry = styled.div<{ isBottom: boolean; isMiddle: boolean; isTop: boolean }>`
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border: solid 1px #e6eaee;
  border-left: 0;
  color: #354052;
  display: flex;
  font-family: "Proxima Nova";
  justify-content: space-between;
  padding: 30px 16px;

  ${(props) =>
    props.isBottom &&
    `
    border-bottom: solid 1px #e6eaee;
    border-top-right-radius: 0;
  `}

  ${(props) =>
    props.isMiddle &&
    `
    border-bottom: 0;
    border-radius: 0;
  `}

  ${(props) =>
    props.isTop &&
    `
    border-bottom-right-radius: 0;
    border-bottom: 0;
  `}
`;

import styled from "styled-components";

interface StyledTimeEntryProps {
  isBottom: boolean;
  isMiddle: boolean;
  isTop: boolean;
}

export const TimeEntry = styled.div<StyledTimeEntryProps>`
  align-items: center;
  background-color: #fff;
  border: solid 1px #e6eaee;
  border-bottom-right-radius: 4px;
  border-left: 0;
  border-top-right-radius: 4px;
  color: #354052;
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 32px 16px;

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

  .client {
    margin-right: 32px;
  }

  .delete-button {
    display: none;
  }

  &:hover {
    .delete-button {
      display: flex;
    }
  }
`;

export const DeleteTimeEntryButton = styled.button`
  align-items: center;
  background: #fb6375;
  border-radius: 4px;
  box-shadow: 0 0 3px black;
  color: white;
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: auto;
  width: 80px;

  .delete {
    margin-right: 4px;
  }
`;

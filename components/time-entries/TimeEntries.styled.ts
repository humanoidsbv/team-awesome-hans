import styled from "styled-components";

interface TimeEntryProps {
  isBottom: boolean;
  isMiddle: boolean;
  isTop: boolean;
}

export const TimeEntryContainer = styled.div<TimeEntryProps>`
  border-left: solid 4px #4f88ef;
  border-radius: 4px;

  ${(props) =>
    props.isBottom &&
    `
		border-top-left-radius: 0px;
    border-bottom-left-radius: 4px;
  `}

  ${(props) =>
    props.isMiddle &&
    `
    border-radius: 0;    
  `}

  ${(props) =>
    props.isTop &&
    `
		border-bottom-left-radius: 0px;
    border-top-left-radius: 4px;
  `}
`;

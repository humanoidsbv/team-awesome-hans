import styled from "styled-components";

export const TeamMember = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  border: solid 1px #e6eaee;
  border-bottom-right-radius: 4px;
  border-left: 0;
  border-top-right-radius: 4px;
  color: #354052;
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
  flex-direction: column;
  width: 100%;
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
	margin: 0 16px;
  width: 100%;
`;

export const TeamMemberIcon = styled.img`
  border-radius: 90px;
  margin-right: 25px;
`;

export const TeamMemberNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamMemberName = styled.span`
  white-space: nowrap;
  margin-bottom: 2px;
`;

export const TeamMemberRole = styled.span`
  white-space: nowrap;
  color: #7f8fa4;
`;

export const TeamMemberDetailButton = styled.button`
  margin-left: auto;
  background: none;
`;

export const TeamMemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TeamMemberDetailsHeader = styled.div`
  background: #f5f8fa;
  height: 36px;
  border-top: solid 1px #e6eaee;
  border-bottom: solid 1px #e6eaee;
  color: #7f8fa4;
`;

export const TeamMemberEmployer = styled.span``;

export const TeamMemberEmployerFooter = styled.span`
  color: #7f8fa4;
  margin-bottom: 16px;
`;

export const TeamMemberStartTime = styled.span``;

export const TeamMemberStartingDateFooter = styled.span`
  color: #7f8fa4;
`;

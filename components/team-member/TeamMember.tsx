import React from "react";
import { TeamMemberInterface } from "../../fixtures/team-members";
import ArrowDown from "../../public/images/arrow-down.svg";

import * as Styled from "./TeamMember.styled";

interface TeamMemberProps {
  teamMember: TeamMemberInterface;
}

export const TeamMember = ({ teamMember }: TeamMemberProps) => {
  return (
    <Styled.TeamMember>
      <Styled.TeamMemberContainer>
        <Styled.TeamMemberIcon src={`${teamMember.icon}${Math.floor(Math.random() * 10001)}`} />
        <Styled.TeamMemberNameWrapper>
          <Styled.TeamMemberName>{teamMember.name}</Styled.TeamMemberName>
          <Styled.TeamMemberRole>{teamMember.role}</Styled.TeamMemberRole>
        </Styled.TeamMemberNameWrapper>
        <Styled.TeamMemberDetailButton>
          <ArrowDown />
        </Styled.TeamMemberDetailButton>
      </Styled.TeamMemberContainer>
      <Styled.TeamMemberDetails>
        <Styled.TeamMemberDetailsHeader>
          Detailed information about {teamMember.name}
        </Styled.TeamMemberDetailsHeader>
        <Styled.TeamMemberEmployer>{teamMember.employer}</Styled.TeamMemberEmployer>
        <Styled.TeamMemberEmployerFooter>Current employer</Styled.TeamMemberEmployerFooter>
        <Styled.TeamMemberStartTime>{teamMember.startTime}</Styled.TeamMemberStartTime>
        <Styled.TeamMemberStartingDateFooter>Starting date</Styled.TeamMemberStartingDateFooter>
      </Styled.TeamMemberDetails>
    </Styled.TeamMember>
  );
};

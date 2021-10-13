import React, { useState, useEffect } from "react";

import { getDate } from "../../services/date";
import { TeamMemberInterface } from "../../fixtures/team-members";
import * as Styled from "./TeamMember.styled";
import ArrowDown from "../../public/images/arrow-down.svg";

interface TeamMemberProps {
  teamMember: TeamMemberInterface;
}

export const TeamMember = ({ teamMember }: TeamMemberProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIcon(`${teamMember.icon}${Math.floor(Math.random() * 10001)}`);
  }, [teamMember]);

  return (
    <Styled.TeamMember>
      <Styled.TeamMemberContainer onClick={handleClick}>
        <Styled.TeamMemberIcon src={icon} />
        <Styled.TeamMemberNameWrapper>
          <Styled.TeamMemberName>{teamMember.name}</Styled.TeamMemberName>
          <Styled.TeamMemberRole>{teamMember.role}</Styled.TeamMemberRole>
        </Styled.TeamMemberNameWrapper>
        <Styled.TeamMemberDetailButton>
          <ArrowDown />
        </Styled.TeamMemberDetailButton>
      </Styled.TeamMemberContainer>
      <Styled.TeamMemberDetailsHeader isOpen={isOpen}>
        Detailed information about {teamMember.name}
      </Styled.TeamMemberDetailsHeader>
      <Styled.TeamMemberDetails isOpen={isOpen}>
        <Styled.TeamMemberDetailWrapper>
          <Styled.TeamMemberEmployeeNumber>{teamMember.number}</Styled.TeamMemberEmployeeNumber>
          <Styled.TeamMemberEmployerFooter>Employee number</Styled.TeamMemberEmployerFooter>
        </Styled.TeamMemberDetailWrapper>
        <Styled.TeamMemberDetailWrapper>
          <Styled.TeamMemberEmployeeNumber>{teamMember.employer}</Styled.TeamMemberEmployeeNumber>
          <Styled.TeamMemberEmployerFooter>Current employer</Styled.TeamMemberEmployerFooter>
        </Styled.TeamMemberDetailWrapper>
        <Styled.TeamMemberDetailWrapper>
          <Styled.TeamMemberStartTime>{getDate(teamMember.startTime)}</Styled.TeamMemberStartTime>
          <Styled.TeamMemberStartingDateFooter>Starting date</Styled.TeamMemberStartingDateFooter>
        </Styled.TeamMemberDetailWrapper>
      </Styled.TeamMemberDetails>
    </Styled.TeamMember>
  );
};

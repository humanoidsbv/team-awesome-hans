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
        <Styled.Icon src={icon} />
        <Styled.NameWrapper>
          <Styled.Name>{teamMember.name}</Styled.Name>
          <Styled.Role>{teamMember.role}</Styled.Role>
        </Styled.NameWrapper>
        <Styled.DetailButton>
          <ArrowDown />
        </Styled.DetailButton>
      </Styled.TeamMemberContainer>

      <Styled.DetailsHeader isOpen={isOpen}>
        Detailed information about {teamMember.name} {/* eslint-disable-line */}
      </Styled.DetailsHeader>

      <Styled.Details isOpen={isOpen}>
        <Styled.DetailWrapper>
          <span>{teamMember.number}</span>
          <Styled.EmployerFooter>Employee number</Styled.EmployerFooter>
        </Styled.DetailWrapper>
        <Styled.DetailWrapper>
          <span>{teamMember.employer}</span>
          <Styled.EmployerFooter>Current employer</Styled.EmployerFooter>
        </Styled.DetailWrapper>
        <Styled.DetailWrapper>
          <span>{getDate(teamMember.startTime)}</span>
          <Styled.StartingDateFooter>Starting date</Styled.StartingDateFooter>
        </Styled.DetailWrapper>
      </Styled.Details>
    </Styled.TeamMember>
  );
};

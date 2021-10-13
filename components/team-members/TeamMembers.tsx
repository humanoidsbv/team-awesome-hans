import React, { useState } from "react";

import { Button } from "../button/Button";
import { TeamMember } from "../team-member/TeamMember";
import { TeamMemberForm } from "./TeamMemberForm";
import { TeamMemberInterface } from "../../fixtures/team-members";
import * as Styled from "./TeamMembers.styled";

interface TeamMemberProps {
  sortBy: string
  setSortBy: (targetValue: string) => void;
  handleTeamMemberSubmit: (newTeamMember: object) => void;
  teamMembers: TeamMemberInterface[];
}

export const TeamMembers = ({ handleTeamMemberSubmit, setSortBy, sortBy, teamMembers }: TeamMemberProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <>
          <Button onClick={handleClick} primary type="button">
            + New Humanoid
          </Button>
          <Styled.TeamMemberHeader>
            <Styled.TeamMembersTitle>All Humanoids</Styled.TeamMembersTitle>
            <Styled.ButtonWrapper>
              <Button onClick={handleClick} tertiary type="button">
                + New Humanoid
              </Button>
              <Styled.Sort onChange={handleChange} value={sortBy}>
                <option value="date-asc">date ⬆</option>
                <option value="date-desc">date ⬇</option>
                <option value="name-asc">name ⬆</option>
                <option value="name-desc">name ⬇</option>
              </Styled.Sort>
            </Styled.ButtonWrapper>
          </Styled.TeamMemberHeader>
          {teamMembers.map((teamMember) => (
            <Styled.TeamMemberContainer>
              <TeamMember key={teamMember.id} teamMember={teamMember} />
            </Styled.TeamMemberContainer>
          ))}
        </>
      )}
      {isOpen && (
        <TeamMemberForm handleClick={handleClick} handleTeamMemberSubmit={handleTeamMemberSubmit} />
      )}
    </>
  );
};

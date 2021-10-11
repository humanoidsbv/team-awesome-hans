import React from "react";

import { TeamMember } from "../team-member/TeamMember";
import { TeamMemberInterface } from "../../fixtures/team-members";
import * as Styled from "./TeamMembers.styled";

interface TeamMemberProps {
  teamMembers: TeamMemberInterface[];
}

export const TeamMembers = ({ teamMembers }: TeamMemberProps) => {
  return (
    <>
      {teamMembers?.map((teamMember) => (
        <Styled.TeamMemberContainer>
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        </Styled.TeamMemberContainer>
      ))}
    </>
  );
};

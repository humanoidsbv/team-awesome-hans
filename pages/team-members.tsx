import React, { useContext, useEffect, useState } from "react";

import { getTeamMembers, postTeamMember } from "../services/team-members-api";
import { Header } from "../components/header/Header";
import { Message } from "../components/message/Message";
import { minimumWait } from "../services/minimum-wait";
import { NotFoundError } from "../services/errors";
import { PageContainer } from "../components/page-container/PageContainer";
import { StoreContext } from "../context/StoreContext";
import { TeamMemberInterface } from "../fixtures/team-members";
import { TeamMembers } from "../components/team-members/TeamMembers";

const TeamMemberPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useContext(StoreContext).teamMembers;
  const [teamMembersMessage, setTeamMemberMessage] = useState<string>();
  const [sortBy, setSortBy] = useState("date-asc");

  async function fetchTeamMembers() {
    const response = await getTeamMembers(sortBy);

    if (response instanceof NotFoundError) {
      setTeamMemberMessage("Oh no! Something went wrong..");
      setIsLoading(false);
      return Promise.reject();
    }

    if (response.length === 0) {
      setTeamMemberMessage("No Team Members found..");
      setTeamMembers(response);
      setIsLoading(false);
      return Promise.reject();
    }

    setTeamMembers(response);
    return response;
  }

  const handleTeamMemberSubmit = (newTeamMember: TeamMemberInterface) => {
    setIsLoading(true);
    minimumWait(
      async () => {
        const formattedNewTeamMember = newTeamMember;
        formattedNewTeamMember.number += teamMembers.length + 1;
        await postTeamMember(formattedNewTeamMember);
        await fetchTeamMembers();
      },
      () => setIsLoading(false),
      500,
    );
  };

  useEffect(() => {
    fetchTeamMembers();
  }, [sortBy]);

  return (
    <>
      <Header subtitle={`${teamMembers.length} Humanoids`} title="Team members" />
      <PageContainer>
        {isLoading && <Message message="Loading Team Members..." />}
        {!isLoading && (
          <TeamMembers
            handleTeamMemberSubmit={handleTeamMemberSubmit}
            setSortBy={setSortBy}
            sortBy={sortBy}
            teamMembers={teamMembers}
          />
        )}
        {!teamMembers.length && <Message message={teamMembersMessage} />}
      </PageContainer>
    </>
  );
};

export default TeamMemberPage;

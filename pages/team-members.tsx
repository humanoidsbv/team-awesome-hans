import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Message } from "../components/message/Message";
import { PageContainer } from "../components/page-container/PageContainer";
import { TeamMembers } from "../components/team-members/TeamMembers";
import { StoreContext } from "../context/StoreContext";
import { NotFoundError } from "../services/errors";
import { minimumWait } from "../services/minimum-wait";
import { getTeamMembers } from "../services/team-members-api";

const TeamMemberPage = () => {
	const [isLoading, setIsLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useContext(StoreContext).teamMembers;
  const [teamMembersMessage, setTeamMemberMessage] = useState<string>();

  async function fetchTeamMembers() {
    const response = await getTeamMembers();

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

  useEffect(() => {
    setIsLoading(true);
    minimumWait(fetchTeamMembers, () => setIsLoading(false), 500);
	}, []);
	
  return (
    <>
      <Header title="Team members" subtitle="22 Humanoids" />
      <PageContainer>
        {isLoading && <Message message="Loading Team Members..." />}
        {!isLoading && <TeamMembers teamMembers={teamMembers} />}
        {!teamMembers.length && <Message message={teamMembersMessage} />}
      </PageContainer>
    </>
  );
};

export default TeamMemberPage;

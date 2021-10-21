import React, { createContext, useState } from "react";

import { TeamMemberInterface } from "../fixtures/team-members";
import { TimeEntryInterface } from "../fixtures/time-entries";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  teamMembers: [teamMembers: TeamMemberInterface[], setTeamMembers: Function];
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = {
    teamMembers: useState([]),
    timeEntries: useState([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

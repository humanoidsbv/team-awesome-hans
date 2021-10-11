import React, { createContext, useState } from "react";

import { TimeEntryInterface } from "../fixtures/time-entries"
import { TeamMemberInterface } from "../fixtures/team-members";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];

  teamMembers: [teamMembers: TeamMemberInterface[], setTeamMembers: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = {
    timeEntries: useState([]),
    teamMembers: useState([])
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
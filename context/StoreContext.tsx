import React, { createContext, useState } from "react";

import { TimeEntryInterface } from "../fixtures/time-entries"

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  timeEntries: [
    timeEntries: TimeEntryInterface[],
    setTimeEntries: Function
  ];
}

export const StoreContext = createContext<StoreContextProps>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = {
    timeEntries: useState([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
export interface ITimeEntry {
  id: number;
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const mockTimeEntries: ITimeEntry[] = [
  {
    id: 0.8524250995148186,
    client: "Heineken",
    startTimestamp: "2021-09-23T16:00:00.000Z",
    stopTimestamp: "2021-09-23T18:00:00.000Z",
  },
  {
    id: 0.8524250995148187,
    client: "Port of Rotterdam",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-25T18:00:00.000Z",
  },
  {
    id: 0.8524250995148188,
    client: "Heineken",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-24T18:00:00.000Z",
  },
];

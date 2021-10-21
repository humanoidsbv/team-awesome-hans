import { getDate, getDateTime } from "../date";

it("it extracts the date from an ISO string and equals to: 2 dec. 2011", () => {
  const date = getDate("2011-12-02T11:12:00.000Z");
  expect(date).toBe("2 dec. 2011");
});

it("it extracts the local time from an ISO string and equals to: 12:00", () => {
  const time = getDateTime("2011-12-02T11:00:00.000Z");
  expect(time).toBe("12:00");
});

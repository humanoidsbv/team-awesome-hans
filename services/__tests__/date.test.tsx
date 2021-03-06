import { getDate, getDateTime } from "../date";

test("it extracts the date from an ISO string and equals to: 2 dec. 2011", () => {
  const date = getDate("2011-12-02T11:12:00.000Z");
  expect(date).toBe("2 dec. 2011");
});

test("it extracts the local time from an ISO string and equals to: 11:00", () => {
  const time = getDateTime("2011-12-02T11:00:00.000");
  expect(time).toBe("11:00");
});

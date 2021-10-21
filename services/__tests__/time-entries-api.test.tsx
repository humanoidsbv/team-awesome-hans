import { getTimeEntries } from "../time-entries-api";
import { mockedTimeEntries } from "../../__mocks__/mocked-time-entries";
import { NotFoundError } from "../errors";

test("it fetches TimeEntries from the server", async () => {
  const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve(mockedTimeEntries),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);

  const response = getTimeEntries();

  expect(response).toEqual(mockFetchPromise);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=asc`,
  );
});

test("it returns a notFoundError instance when exception", async () => {
  const error = new NotFoundError("error");
  global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(error));

  const response = await getTimeEntries();

  expect(response).toBeInstanceOf(NotFoundError);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=asc`,
  );
});

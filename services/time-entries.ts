export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
export const getTimeEntries = async () => {
  return fetch("http://localhost:3004/time-entries?_sort=startTime&_order=asc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

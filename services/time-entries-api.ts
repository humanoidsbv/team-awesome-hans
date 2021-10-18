import { NotFoundError } from "./errors";

export const getTimeEntries = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=asc`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

export const postTimeEntry = async (newTimeEntry: object) => {
  fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

export const deleteTimeEntry = async (id: number) => {
  fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

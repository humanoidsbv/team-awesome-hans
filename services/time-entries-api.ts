import { NotFoundError } from "./errors";

export const getTimeEntries = async () => {
  return fetch("http://localhost:3004/time-entries?_sort=startTime&_order=asc")
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
  fetch("http://localhost:3004/time-entries", {
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
  fetch(`http://localhost:3004/time-entries/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

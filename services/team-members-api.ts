import { NotFoundError } from "./errors";

export const getTeamMembers = async (sortBy: string) => {
  let urlParameters;
  if (sortBy === "date-asc") {
    urlParameters = "?_sort=startTime&_order=asc";
  }
  if (sortBy === "date-desc") {
    urlParameters = "?_sort=startTime&_order=desc";
  }
  if (sortBy === "name-asc") {
    urlParameters = "?_sort=name&_order=asc";
  }
  if (sortBy === "name-desc") {
    urlParameters = "?_sort=name&_order=desc";
  }
  return fetch(`http://localhost:3004/team-members${urlParameters}`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

export const postTeamMember = async (newTeamMember: object) => {
  fetch("http://localhost:3004/team-members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
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

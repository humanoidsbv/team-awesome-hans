import { NotFoundError } from "./errors";

export const getTeamMembers = async (sortBy: string) => {
  const order = sortBy.split("-")[1];
  const sort = sortBy.split("-")[0];

  return fetch(`http://localhost:3004/team-members?_sort=${sort}&_order=${order}`)
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

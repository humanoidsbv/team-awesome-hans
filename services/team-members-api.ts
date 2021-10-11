import { NotFoundError } from "./errors";

export const getTeamMembers = async () => {
  return fetch("http://localhost:3004/team-members?_sort=startTime&_order=asc")
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

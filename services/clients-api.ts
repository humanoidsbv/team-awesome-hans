import { NotFoundError } from "./errors";

export const getClients = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/clients`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};

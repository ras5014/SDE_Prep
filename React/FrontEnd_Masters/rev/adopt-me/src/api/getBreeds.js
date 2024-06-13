import axios from "axios";

export const getBreeds = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }
  const apiRes = axios.get(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error("Something went wrong");
  }

  return apiRes.json();
};

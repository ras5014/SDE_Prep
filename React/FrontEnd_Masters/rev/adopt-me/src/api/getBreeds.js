import axios from "axios";

export const getBreeds = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }
  const apiRes = await axios.get(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  return apiRes.data.breeds;
};

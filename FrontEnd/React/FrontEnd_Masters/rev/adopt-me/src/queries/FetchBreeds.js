import axios from "axios";

export const fetchBreeds = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await axios.get(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (apiRes.status !== 200) throw new Error("Error fetching breeds");

  console.log(apiRes);
  return apiRes.data.breeds;
};

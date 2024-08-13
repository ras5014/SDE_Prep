import axios from "axios";

export const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (apiRes.status !== 200) {
    throw new Error("An error occurred while fetching the pet");
  }

  return apiRes.data.pets;
};

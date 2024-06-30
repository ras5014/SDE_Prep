import axios from "axios";

export const fetchPets = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];

  const apiRes = await axios.get(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (apiRes.status !== 200) throw new Error("Error fetching Pets");

  return apiRes.data.pets;
};

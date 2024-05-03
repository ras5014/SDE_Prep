import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const fetchBudget = async ({ queryKey }) => {
  const id = queryKey[1];
  console.log(id);

  const apiRes = await axios.post(`${HOST}/getBudget`, {
    userId: id,
  });

  if (!apiRes.data.success) {
    throw new Error("An error occurred while fetching the budget data");
  }

  if (apiRes.data.success) {
    console.log(apiRes.data.budgetData);
    return apiRes.data.budgetData;
  }
};

export default fetchBudget;

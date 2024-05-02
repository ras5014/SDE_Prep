import axios from "axios";

const fetchBudget = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await axios.post(`${process.env.VITE_HOST}/getBudget`, {
    userId: id,
  });

  if (!apiRes.ok) {
    throw new Error("An error occurred while fetching the budget data");
  }
  if (apiRes.data.success) {
    return apiRes.data.budgetData.json();
  }
};

export default fetchBudget;

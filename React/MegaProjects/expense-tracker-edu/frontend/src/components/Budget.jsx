import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import z from "zod";
import { useQuery } from "@tanstack/react-query";
import fetchBudget from "../queries/fetchBudget";

const Budget = () => {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  // API call using React-Query
  const budgetData = useQuery({
    queryKey: ["budget", user.uid],
    queryFn: fetchBudget,
  });

  return (
    <div>
      <Navbar />

      {budgetData.data && <p>{budgetData.data}</p>}
    </div>
  );
};

export default Budget;

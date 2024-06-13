import { useState } from "react";
import { get, useForm } from "react-hook-form";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getBreeds } from "../api/getBreeds";
const ANIMALS: string[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const [animal, setAnimal] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ['breeds', animal],
    queryFn: getBreeds,
  });

  const breeds = data ?? [];
  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="location">Location</label>
        <input {...register("name")} type="text" />

        <label htmlFor="animal">Animal</label>
        <select {...register("animal")} value={animal} onChange={(e) => setAnimal(e.target.value)}>
          <option />
          {ANIMALS.map(item => (<option key={item}>{item}</option>))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select {...register("breed")} disabled={breeds.length === 0}>
          <option />
          {breeds.map(item => (<option key={item}>{item}</option>))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

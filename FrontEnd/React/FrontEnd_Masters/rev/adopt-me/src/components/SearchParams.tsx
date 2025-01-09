import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useGetBreedsQuery } from "../store/services/pets";
const ANIMALS: string[] = ["bird", "cat", "dog", "rabbit", "reptile"];
// React Query imports
import { useQuery } from '@tanstack/react-query'
import { fetchBreeds } from '../queries/FetchBreeds';
import { fetchPets } from '../queries/FetchPets';

import Results from "./Results";

const SearchParams = () => {

  // react-hook-form config
  const { register, handleSubmit } = useForm();

  const [requestParams, setRequestParams] = useState({ location: "", animal: "", breed: "" });
  const [animal, setAnimal] = useState("");

  // RTK Query hook
  // const { data } = useGetBreedsQuery(animal);
  // const breeds = data ?? [];

  // React-Query hook
  // 1. Get the breeds for the selected animal
  const breedsQuery = useQuery({ queryKey: ['breeds', animal], queryFn: fetchBreeds });
  const breeds = breedsQuery.data ?? [];

  // 2. Get the pets based on the search params
  const petsQuery = useQuery({ queryKey: ['pets', requestParams], queryFn: fetchPets });
  const pets = petsQuery.data ?? [];

  const onSubmit = (formData: any) => {
    console.log("formData", formData);
    setRequestParams(formData);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="location">Location</label>
        <input {...register("location")} type="text" />

        <label htmlFor="animal">Animal</label>
        <select  {...register("animal")} value={animal} onChange={(e) => setAnimal(e.target.value)}>
          <option />
          {ANIMALS.map(item => (<option key={item}>{item}</option>))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select  {...register("breed")} disabled={breeds.length === 0}>
          <option />
          {breeds.map(item => (<option key={item}>{item}</option>))}
        </select>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

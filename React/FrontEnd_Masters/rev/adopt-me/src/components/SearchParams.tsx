import { useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getBreeds } from "../api/getBreeds";
const ANIMALS: string[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const queryClient = useQueryClient();
  const [animal, setAnimal] = useState("");

  const [isPending, error, data] = useQuery({ queryKey: ["breeds", animal], queryFn: getBreeds });

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input name="location" type="text" />

        <label htmlFor="animal">Animal</label>
        <select name="animal" onChange={(e) => setAnimal(e.target.value)}>
          <option />
          {ANIMALS.map(item => (<option>{item}</option>))}
        </select>
        <label htmlFor="breed">Breed</label>
        <input name="breed" type="text" />
      </form>
    </div>
  );
};

export default SearchParams;

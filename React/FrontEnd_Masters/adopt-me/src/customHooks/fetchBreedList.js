import { useState, useEffect } from "react";

const localCache = {};

export const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    usEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        
    }, [animal]);
}
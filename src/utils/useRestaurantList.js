import React, { use } from 'react'
import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        // API Call
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json = await data.json();
        console.log(json.page_data?.sections?.SECTION_SEARCH_RESULT);
        setlistOfRestaurants(json.page_data?.sections?.SECTION_SEARCH_RESULT);
        setFilteredRestaurants(json.page_data?.sections?.SECTION_SEARCH_RESULT);
      };
  return fetchRestaurantList;
}

export default useRestaurantList

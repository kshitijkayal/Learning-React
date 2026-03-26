import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // API Call
      setIsLoading(true);
      const data = await fetch(FETCH_RESTAURANT_URL);
      const json = await data.json();
      const restaurants = json.page_data?.sections?.SECTION_SEARCH_RESULT || [];
      setlistOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    isLoading,
    error,
  };
};

export default useRestaurantList;

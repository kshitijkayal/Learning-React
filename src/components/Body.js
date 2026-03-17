import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import RestaurantCard from "./RestrauntCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
  );

  return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const fetchRestaurantList = useRestaurantList();

  

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
  // not render component (Early return)
  if (!listOfRestaurants) return null;

  if (!onlineStatus) {
    return <h1>🔴 You are offline, please check your internet connection!</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, listOfRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info?.rating?.aggregate_rating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant" + restaurant.order.actionInfo.clickUrl}
              key={restaurant.info.resId}
            >
              <RestaurantCard {...restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

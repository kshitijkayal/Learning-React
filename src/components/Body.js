import RestrauntCard from "./RestrauntCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

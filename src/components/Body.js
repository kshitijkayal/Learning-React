import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import RestaurantCard, { withPromotedLabel } from "./RestrauntCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
  );

  return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    isLoading,
    error,
  } = useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { userName, setUserName } = useContext(UserContext);
  // not render component (Early return)
  if (!onlineStatus) {
    return <h1>🔴 You are offline, please check your internet connection!</h1>;
  }

  if (isLoading) {
    return <Shimmer />;
  }

  if (listOfRestaurants?.length === 0) {
    return (
      <div className="no-restaurants">
        <h2>No restaurants found</h2>
        <p>Try adjusting your search or check back later!</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">Something went wrong. Please try again.</div>;
  }

  return (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="search-input border border-solid border-gray-300 p-2 rounded"
          placeholder="Search for restaurants..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn bg-blue-500 text-white p-2 rounded ml-2"
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
      <div className="filter m-4 p-4">
        <button
          className="filter-btn bg-green-200 text-white p-2 rounded ml-2"
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
      <div>
        <label> UserName: </label>
        <input
          type="text"
          className="user-input border border-solid border-gray-300 p-2 rounded"
          placeholder="Enter logged in user..."
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="restaurant-list flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant" + restaurant.order.actionInfo.clickUrl}
              key={restaurant.info.resId}
            >
              {/* if the Restaarant is promoted then add promoted tag */}
              {restaurant.info?.isPromoted ? (
                <RestaurantCardPromoted {...restaurant} />
              ) : (
                <RestaurantCard {...restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL, FETCH_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { "*": resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // refetch when resId changes
    if (resId) getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    console.log(FETCH_MENU_URL + resId);
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>{restaurant?.pageTitle}</h2>
        {/* <img
          src={CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name || "restaurant image"}
        />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3> */}
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items ?? {}).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;

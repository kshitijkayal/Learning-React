import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { "*": resId } = useParams();

  //created a custom hook to fetch restaurant menu data
  const resInfo = useRestaurantMenu(resId);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>{resInfo?.pageTitle}</h2>
        {/* <img
          src={CDN_URL + resInfo?.cloudinaryImageId}
          alt={resInfo?.name || "restaurant image"}
        />
        <h3>{resInfo?.area}</h3>
        <h3>{resInfo?.city}</h3>
        <h3>{resInfo?.avgRating} stars</h3>
        <h3>{resInfo?.costForTwoMsg}</h3> */}
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(resInfo?.menu?.items ?? {}).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;

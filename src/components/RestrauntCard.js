import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({
  info: {
    name,
    image: { url },
    rating: { aggregate_rating },
    cuisine,
  },
  order: { deliveryTime },
}) => {
  const cuisineNames = cuisine ? cuisine.map((c) => c.name).join(", ") : "";
  return (
    <div className="card w-64 p-4 m-4 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <img className="rounded-lg" src={url} alt={name} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisineNames}</h3>
      <h4>{deliveryTime}</h4>
      <p>Rating: {aggregate_rating}</p>
    </div>
  );
};

//Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted">
        <label className="absolute bg-black text-white p-2 m-2 rounded">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;

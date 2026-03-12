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
    <div className="card">
      <img src={url} />
      <h2>{name}</h2>
      <h3>{cuisineNames}</h3>
      <h4>{deliveryTime}</h4>
      <p>Rating: {aggregate_rating}</p>
    </div>
  );
};

export default RestrauntCard;

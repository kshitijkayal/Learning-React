import React from "react";
import { addItemToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (singleItem) => {
    dispatch(addItemToCart(singleItem));
  };
  return (
    <div className="space-y-3">
      {item.map((singleItem, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex-1">
            <span className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-200">
              {singleItem.item.name}
            </span>
          </div>
          <div className="ml-4 relative">
            <img
              src={singleItem.item.item_image_url}
              alt={singleItem.item.name}
              className="w-32 h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200"
            />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm border-2 border-white whitespace-nowrap cursor-pointer"
              onClick={() => handleAddItem(singleItem)}
              // onClick={handleAddItem}
              // onClick={handleAddItem(singleItem)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

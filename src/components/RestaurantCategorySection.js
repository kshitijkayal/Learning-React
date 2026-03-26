import React from "react";
import ItemList from "./ItemList";

const RestaurantCategorySection = ({ categorySection }) => {
  const [showItemList, setShowItemList] = React.useState(false);

  const handleClick = () => {
    setShowItemList(!showItemList);
  };
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      {categorySection.categories.map((category, index) => (
        <div key={index} className="border-b border-gray-100 last:border-b-0">
          <div
            className="bg-gray-50 px-6 py-4 border-l-4 border-orange-400 cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-semibold text-lg text-gray-700">
              {category.name}{" "}
              <span className="text-orange-500 font-normal">
                ({category.items.length} items)
              </span>
            </span>
          </div>
          <div className="px-6 py-2">
            {showItemList && <ItemList item={category.items} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategorySection;

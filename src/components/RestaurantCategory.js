import RestaurantCategorySection from "./RestaurantCategorySection";

const RestaurantCategory = ({ menu, showCategorySection, setShowIndex }) => {
  //   const [showCategorySection, setShowCategorySection] = useState(false);

  const handleClick = () => {
    //setShowCategorySection(!showCategorySection);
    setShowIndex();
  };

  return (
    <div className="w-8/12 mx-auto mb-6">
      <div className="bg-linear-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div
          className="flex justify-between items-center p-5 hover:bg-linear-to-r hover:from-orange-100 hover:to-amber-100 rounded-lg transition-colors duration-200"
          onClick={handleClick}
        >
          <span className="font-bold text-xl text-gray-800 tracking-wide">
            {menu.categoryName}{" "}
            <span className="text-orange-600">({menu.categories.length})</span>
          </span>
          <span className="text-2xl transform transition-transform duration-200 hover:scale-110">
            🍽️
          </span>
        </div>
      </div>
      <div className="mt-2">
        {showCategorySection && (
          <RestaurantCategorySection categorySection={menu} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;

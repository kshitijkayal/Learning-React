import React, { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { "*": resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  //created a custom hook to fetch restaurant menu data
  const resInfo = useRestaurantMenu(resId);

  // Helper functions to extract menu data
  const getMenuData = (data) => {
    if (!data || !Array.isArray(data)) return [];

    return data.map((menuWrapper, index) => {
      const menu = menuWrapper?.menu;

      const categories = menu?.categories?.map((categoryWrapper, index) => {
        return categoryWrapper?.category;
      });

      const itemList = categories?.map((itemWrapper, index) => {
        return itemWrapper?.items;
      });

      return {
        categoryName: menu?.name || `Menu ${index + 1}`,
        categories: categories || [],
        itemList: itemList || [],
      };
    });
  };

  const menuData = getMenuData(
    resInfo?.page_data?.order?.menuList?.menus || [],
  );

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {menuData.map((menu, menuIndex) => (
          <RestaurantCategory
            key={menuIndex}
            menu={menu}
            showCategorySection={menuIndex === showIndex ? true : false}
            setShowIndex={() => setShowIndex(menuIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

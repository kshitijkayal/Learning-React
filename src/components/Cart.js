import React, { use } from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <p className="text-gray-700">
            You have {cartItems.length} items in your cart.
          </p>
        )}
        <ItemList item={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;

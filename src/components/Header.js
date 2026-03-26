import { Link } from "react-router";
import Title from "./Title";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
// Composing Comopnentss
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between bg-pink-50 shadow-lg p-4">
      <Title />
      <div className="nav-items flex items-center m-4 p-4">
        <ul className="flex space-x-4">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length}) items</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

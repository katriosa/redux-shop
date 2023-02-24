import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/index";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.quantity);

  const toggleHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

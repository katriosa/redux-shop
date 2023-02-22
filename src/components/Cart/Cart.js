import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const isShowCart = useSelector((state) => state.isShowCart);
  const quantity = useSelector((state) => state.quantity);
  const totalPrice = useSelector((state) => state.totalPrice);
  const cartContent = (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: quantity,
            total: totalPrice,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
  return <>{isShowCart && cartContent}</>;
};

export default Cart;

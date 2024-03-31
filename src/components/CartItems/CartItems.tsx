import {useCartStore} from "../../store/useCartStore.ts";
import CartItem from "../CartItem/CartItem.tsx";
import {CartState} from "../../types/cartState.ts";
import {cartItem} from "../../types/cartItem.ts";
import classes from "./CartItems.module.css";


const CartItems = () => {
    const cartItems = useCartStore((state:CartState) => state.cartItems);

    return (
        <div className={classes.CartItems}>
            {cartItems.map((item:cartItem, index) => (
                <CartItem
                    id={item.id}
                    key={index}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    quantity={item.quantity}
                />
            ))}
        </div>
    );
};

export default CartItems;
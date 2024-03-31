import React from 'react';
import {useCartStore} from "../../store/useCartStore.ts";
import {CartState} from "../../types/cartState.ts";
import Button from "../UI/Button/Button.tsx";
import classes from "./CartItem.module.css";
import Icon from "../UI/Icon/Icon.tsx";
import bin from "../../assets/bin.svg";

type CartItemProps = {
    id: string
    name: string;
    price: number;
    img: string;
    quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({id, name, price, img, quantity}) => {
    const updateQuantity = useCartStore((state: CartState) => state.updateQuantity);
    const removeFromCart = useCartStore((state: CartState) => state.removeFromCart);

    const handleIncrement = () => {
        updateQuantity(id, quantity + 1);
    };

    const handleDecrement = () => {
        updateQuantity(id, quantity - 1);
    };

    const handleRemove = () => {
        removeFromCart(id);
    };

    return (
        <div className={classes.CartItem}>
            <div>
                <img src={img} alt={name} className={classes.CartItem__image}/>
                <div>
                    <div>
                        <Button className={classes.CartItem__quantityButton} onClick={handleDecrement}>-</Button>
                        <span className={classes.classItem__quantity}>{quantity}</span>
                        <Button className={classes.CartItem__quantityButton} onClick={handleIncrement}>+</Button>
                    </div>
                    <div className={classes.CartItem__price}>{price * quantity} ₽</div>
                </div>
            </div>
            <div className={classes.info}>
                <h3 className={classes.info__title}>{name}</h3>
                <span className={classes.info__price}>{price} ₽</span>
            </div>
            <Button className={classes.CartItem__bin} onClick={handleRemove}>
                <Icon src={bin}></Icon>
            </Button>
        </div>
    );
};

export default CartItem;
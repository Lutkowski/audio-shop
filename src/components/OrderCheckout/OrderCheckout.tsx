import {useCartStore} from "../../store/useCartStore.ts";
import Button from "../UI/Button/Button.tsx";
import classes from "./OrderCheckout.module.css";

const OrderCheckout = () => {
    const total = useCartStore(state => state.getTotal());
    return (
        <div className={classes.OrderCheckout}>
            <div className={classes.OrderCheckout__summary}>
                <span>ИТОГО</span>
                <span>{`₽ ${total}`}</span>
            </div>
            <Button className={classes.OrderCheckout__button}>
                Перейти к оформлению
            </Button>
        </div>
    );
};

export default OrderCheckout;
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import Wrapper from "../../components/Layout/Wrapper/Wrapper.tsx";
import CartItems from "../../components/CartItems/CartItems.tsx";
import OrderCheckout from "../../components/OrderCheckout/OrderCheckout.tsx";
import classes from "./Cart.module.css"

const Cart = () => {
    return (
        <Wrapper>
            <Header></Header>
            <div className={classes.content}>
                <h2>Корзина</h2>
                <div className={classes.Cart}>
                    <CartItems></CartItems>
                    <OrderCheckout></OrderCheckout>
                </div>
            </div>
            <Footer></Footer>
        </Wrapper>
    );
};

export default Cart;
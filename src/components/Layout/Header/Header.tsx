import Logo from "../../UI/Logo/Logo.tsx";
import Icon from "../../UI/Icon/Icon.tsx";
import likeIcon from "../../../assets/like.svg"
import cartIcon from "../../../assets/cart.svg"
import classes from "./Header.module.css"
import {Link} from "react-router-dom";
import {useCartStore} from "../../../store/useCartStore.ts";

const Header = () => {
    const itemsCount = useCartStore(state => state.getItemsCount());
    return (
        <header className={classes.Header}>
            <Link to="/">
                <Logo className={classes.Header__Logo}/>
            </Link>
            <nav className={classes.Header__nav}>
                <Icon className={classes.Header__Icon} src={likeIcon}></Icon>
                <Link to="/cart">
                    <Icon src={cartIcon} className={classes.Header__CartIcon} data-count={itemsCount}></Icon>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
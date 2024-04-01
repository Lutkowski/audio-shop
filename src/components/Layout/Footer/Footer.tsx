import Logo from "../../UI/Logo/Logo.tsx";
import Icon from "../../UI/Icon/Icon.tsx";
import vkIcon from "../../../assets/VK.svg";
import telegramIcon from "../../../assets/Telegram.svg";
import whatsappIcon from "../../../assets/Whatsapp.svg";
import classes from "./Footer.module.css"
import globe from "../../../assets/globe.svg"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <Link to="/" className="Link">
                <Logo className={classes.Footer__logo}>
                </Logo>
            </Link>
            <nav>
                <ul className={classes.Footer__list}>
                    <li>Избранное</li>
                    <Link to="/cart" className="Link">
                        <li>Корзина</li>
                    </Link>
                    <li>Контакты</li>
                </ul>
            </nav>
            <ul className={classes.Footer__list}>
                <li>Условия сервиса</li>
                <li className={classes.language}>
                    <Icon src={globe}></Icon>
                    <span>Рус</span>
                </li>
            </ul>
            <div>
                <ul className={classes.Footer__media}>
                    <Link to="https://vk.com/qpick" className="Link">
                        <li><Icon src={vkIcon}></Icon></li>
                    </Link>
                    <Link to="https://t.me/qpick" className="Link">
                        <li><Icon src={telegramIcon}></Icon></li>
                    </Link>
                    <Link to="https://api.whatsapp.com/send?phone=42424242424242" className="Link">
                        <li><Icon src={whatsappIcon}></Icon></li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
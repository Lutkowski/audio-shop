import Logo from "../../UI/Logo/Logo.tsx";
import Icon from "../../UI/Icon/Icon.tsx";
import vkIcon from "../../../assets/VK.svg";
import telegramIcon from "../../../assets/Telegram.svg";
import whatsappIcon from "../../../assets/Whatsapp.svg";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <Logo className={classes.Footer__logo}>
            </Logo>
            <nav>
                <ul className={classes.Footer__list}>
                    <li>Избранное</li>
                    <li>Корзина</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <ul className={classes.Footer__list}>
                <li>Условия сервиса</li>
                <li>Eng</li>
            </ul>
            <div>
            <ul className={classes.Footer__media}>
                    <li><Icon src={vkIcon}></Icon></li>
                    <li><Icon src={telegramIcon}></Icon></li>
                    <li><Icon src={whatsappIcon}></Icon></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
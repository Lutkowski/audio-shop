import starIcon from "../../assets/star.svg"
import Icon from "../UI/Icon/Icon.tsx";
import React from "react";
import {Product} from "../../types/product.ts";
import {useCartStore} from "../../store/useCartStore.ts";
import classes from "./ProductCard.module.css"
import Button from "../UI/Button/Button.tsx";


const ProductCard: React.FC<Product> = ({id,  name, rating, price, img }) => {
    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = () => {
        addToCart({ id, name, rating, price, img, quantity:1 });
    };
    return (
        <div className={classes.ProductCard}>
            <img src={img} alt={name} className={classes.ProductCard__image}/>
            <div className={classes.ProductCard__info}>
                <h3 className={classes.ProductCard__title}>{name}</h3>
                <div className={classes.ProductCard__price}>{price} ₽</div>
                <div className={classes.ProductCard__rating}>
                    <Icon src={starIcon}></Icon>
                    <span>{rating}</span>
                </div>
                <Button className={classes.ProductCard__button} onClick={handleAddToCart}>Купить</Button>
            </div>
        </div>
    );
};

export default ProductCard;
import ProductCard from "../ProductCard/ProductCard.tsx";
import {Product} from "../../types/product.ts";
import React from "react";
import classes from "./ProductSection.module.css"
interface ProductSectionProps {
    title: string;
    products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({title, products}) => {
    return (
        <section>
            <h2 className={classes.ProductSection__title}>{title}</h2>
            <div className={classes.ProductSection__container}>
                {products.map(product => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        name={product.name}
                        rating={product.rating}
                        price={product.price}
                        img={product.img}
                        oldPrice = {product.oldPrice}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
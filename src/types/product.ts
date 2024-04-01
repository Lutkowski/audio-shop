export interface Product {
    id: string;
    name: string;
    rating: number;
    price: number;
    oldPrice?: number;
    img: string;
}
import {cartItem} from "./cartItem.ts";

export interface CartState {
    cartItems: cartItem[];
    addToCart: (product: cartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getItemsCount: () => number;
    getTotal: () => number;
}
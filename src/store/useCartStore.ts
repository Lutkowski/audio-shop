import create from 'zustand';
import {cartItem} from "../types/cartItem.ts";
import {CartState} from "../types/cartState.ts";

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    addToCart: (product: cartItem) => set((state: CartState) => {
        const itemIndex = state.cartItems.findIndex((item: cartItem) => item.id === product.id);
        if (itemIndex !== -1) {
            state.cartItems[itemIndex].quantity += 1;
        } else {
            state.cartItems.push({...product, quantity: 1});
        }
        return {cartItems: [...state.cartItems]};
    }),
    removeFromCart: (productId: string) => set((state: CartState) => {
        const newCartItems = state.cartItems.filter((item: cartItem) => item.id !== productId);
        return {cartItems: newCartItems};
    }),
    updateQuantity: (productId: string, quantity: number) => set((state: CartState) => {
        const itemIndex = state.cartItems.findIndex((item: cartItem) => item.id === productId);
        if (itemIndex !== -1) {
            if (quantity > 0) {
                state.cartItems[itemIndex].quantity = quantity;
            } else {
                // Удаляем товар, если его количество равно 0
                state.cartItems.splice(itemIndex, 1);
            }
        }
        return {cartItems: [...state.cartItems]};
    }),
    getItemsCount: () => get().cartItems.reduce((acc, item) => acc + item.quantity, 0),
    getTotal: () => get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
}));

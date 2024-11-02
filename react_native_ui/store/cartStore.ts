import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  //todo if already in cart, increase quantity by 1
  //todo if not in cart, add to cart
  addProducts: (product: any) =>
    set((state) => ({
      items: [...state.items, { product, quantity: 1 }],
    })),

  resetCard: () => set({ items: [] }),
}));

import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  addProducts: (product: any) =>
    set((state) => ({
      items: [...state.items, { product, quantity: 1 }],
    })),
}));

import { create } from "zustand";

interface Query {
  genders: string[];
  addGender: (gender: string) => void;
  removeGender: (gender: string) => void;
  brands: string[];
  addBrand: (brand: string) => void;
  removeBrand: (brand: string) => void;
  clearBrands: () => void;
}

const useStore = create<Query>((set) => ({
  genders: [],
  addGender: (gender) =>
    set((store) => ({ genders: [...store.genders, gender] })),
  removeGender: (gender) =>
    set((store) => ({ genders: store.genders.filter((g) => g !== gender) })),
  brands: [],
  addBrand: (brand) => set((store) => ({ brands: [...store.brands, brand] })),
  removeBrand: (brand) =>
    set((store) => ({ brands: store.brands.filter((g) => g !== brand) })),
  clearBrands: () => set(() => ({ brands: [] })),
}));

export default useStore;

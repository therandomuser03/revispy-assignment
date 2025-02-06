// src/store/categories.ts
import { create } from 'zustand';

interface CategoryState {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set, get) => ({
  selectedCategories: JSON.parse(localStorage.getItem('selectedCategories') || '[]'),
  toggleCategory: (category: string) => {
    const current = get().selectedCategories;
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    localStorage.setItem('selectedCategories', JSON.stringify(updated));
    set({ selectedCategories: updated });
  },
}));

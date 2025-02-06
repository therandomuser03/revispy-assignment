// src/pages/Categories.tsx
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Pagination from '../components/Pagination';
import { useCategoryStore } from '../store/categories';

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const categoriesPerPage = 6;
  const { selectedCategories, toggleCategory } = useCategoryStore();

  useEffect(() => {
    // Generate 100 fake categories using faker-js
    const fakeCategories = Array.from({ length: 100 }, () => faker.commerce.department());
    setCategories(fakeCategories);
  }, []);

  const offset = currentPage * categoriesPerPage;
  const currentCategories = categories.slice(offset, offset + categoriesPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Select Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {currentCategories.map((category, index) => (
          <div 
            key={index}
            onClick={() => toggleCategory(category)}
            className={`border p-2 cursor-pointer ${selectedCategories.includes(category) ? "bg-blue-200" : ""}`}
          >
            {category}
          </div>
        ))}
      </div>
      <Pagination 
        pageCount={Math.ceil(categories.length / categoriesPerPage)} 
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Categories;

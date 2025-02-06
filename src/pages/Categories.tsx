// src/pages/Categories.tsx
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Pagination from '../components/Pagination';
import { useCategoryStore } from '../store/categories';

interface Category {
  id: string;
  name: string;
}

const Categories = () => {
  // Set initial currentPage to 1 (1-based indexing)
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;
  const { selectedCategories, toggleCategory } = useCategoryStore();

  useEffect(() => {
    // Generate 100 fake categories
    const fakeCategories = Array.from({ length: 100 }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.department(),
    }));
    setCategories(fakeCategories);
  }, []);

  // Calculate offset based on 1-based currentPage
  const offset = (currentPage - 1) * categoriesPerPage;
  const currentCategories = categories.slice(offset, offset + categoriesPerPage);

  // Update currentPage when pagination changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Card container */}
      <div className="relative z-10 w-full h-[600px] max-w-[576px] bg-white rounded-[20px] border border-[#c1c1c1] shadow-md p-8">
        {/* Header */}
        <h1 className="text-center text-3xl font-semibold mb-6">
          Please mark your interests!
        </h1>
        <p className="text-center text-base mb-6">
          We will keep you notified.
        </p>

        {/* Divider */}
        <div className="mt-4 border-t border-[#c1c1c1]"></div>
        
        {/* Checkbox List for Categories */}
        <div className="mt-2 space-y-3 mb-4 pl-6">
          <h2 className="py-8 font-semibold text-2xl">My saved interests!</h2>
          {currentCategories.map((category) => (
            <label key={category.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-lg">{category.name}</span>
            </label>
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          pageCount={Math.ceil(categories.length / categoriesPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Categories;

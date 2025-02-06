// src/components/Pagination.tsx
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="flex list-none space-x-2 justify-center my-4"
      pageClassName="px-3 py-1 border border-gray-300 cursor-pointer"
      activeClassName="bg-blue-500 text-white"
      previousClassName="px-3 py-1 border border-gray-300 cursor-pointer"
      nextClassName="px-3 py-1 border border-gray-300 cursor-pointer"
    />
  );
};

export default Pagination;

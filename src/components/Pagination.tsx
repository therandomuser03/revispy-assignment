// src/components/CustomPagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageCount, onPageChange }) => {
  const windowSize = 7;
  let startPage = 1;
  let endPage = pageCount;
  
  if (pageCount > windowSize) {
    // If currentPage is 7 or below, show pages 1 to 7.
    if (currentPage <= windowSize) {
      startPage = 1;
      endPage = windowSize;
    } else {
      // Otherwise, slide the window so that currentPage appears within it.
      startPage = currentPage - 4;
      endPage = startPage + windowSize - 1;
      // Ensure we don't exceed pageCount.
      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = pageCount - windowSize + 1;
      }
    }
  }
  
  // Create an array of page numbers for the window.
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  const goToPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const goToNext = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center my-12 space-x-2">
      {/* Left Arrow */}
      <button onClick={goToPrev} disabled={currentPage === 1}>
        <span className="text-[#ababab] text-xl font-medium font-['Inter'] leading-relaxed">
          {"<< <"}
        </span>
      </button>
      
      {/* Page Numbers */}
      {pages.map((page) => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1  cursor-pointer text-xl font-medium font-['Inter'] leading-relaxed ${
            page === currentPage ? "text-black" : "text-[#ababab]"
          }`}
        >
          {page}
        </button>
      ))}
      
      {/* Right Arrow */}
      <button onClick={goToNext} disabled={currentPage === pageCount}>
        <span className="text-[#ababab] text-xl font-medium font-['Inter'] leading-relaxed">
          {"> >>"}
        </span>
      </button>
    </div>
  );
};

export default Pagination;

import React from 'react';
import './pagination.css';
import '../../../src/App.css';

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className="pagination flex items-center">
      <button onClick={onPrevPage} disabled={currentPage === 1} className="aa-pagination-button mr-2">
        Previous
      </button>
      <span className="mr-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages || totalPages === 0} className="aa-pagination-button">
        Next
      </button>
    </div>
  );
};

export default Pagination;

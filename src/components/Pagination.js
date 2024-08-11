import React from "react";

const Pagination = ({ currentpage, totalpages, onpagechange }) => {
  const handlePageChange = (page) => {
    onpagechange(page);
  };

  const handlePrevPage = () => {
    if (currentpage > 1) {
      handlePageChange(currentpage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentpage < totalpages) {
      handlePageChange(currentpage + 1);
    }
  };

  return (
    <div>
      <button
        variant="outlined"
        color="primary"
        onClick={handlePrevPage}
        disabled={currentpage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalpages }, (_, i) => i + 1).map((page) => (
        <button
          variant="outlined"
          color="primary"
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentpage}
        >
          {page}
        </button>
      ))}
      <button
        variant="outlined"
        color="primary"
        onClick={handleNextPage}
        disabled={currentpage === totalpages}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;

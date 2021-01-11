import React from "react";
import "./styles.css";

const Pagination = ({ pagination, changePage }) => {
  const { pageInfo, totalPages, totalResults } = pagination;

  return (
    <div className="pagination-container">
      <button
        disabled={pageInfo === 1}
        className="button-hover"
        onClick={() => changePage("previous")}
      >
        Previous
      </button>

      {pageInfo !== 1 && (
        <button className="pagination-button" disabled>
          {pageInfo - 1}
        </button>
      )}
      <button disabled className="current-page pagination-button">
        {pageInfo}
      </button>
      {totalPages - pageInfo > 0 && (
        <button disabled className="pagination-button">
          {pageInfo + 1}
        </button>
      )}
      {totalPages - pageInfo - 1 > 0 && <p>...</p>}
      {totalPages - pageInfo - 1 > 0 && <p>{totalPages - pageInfo - 1}</p>}
      <button
        disabled={totalPages - pageInfo === 0}
        className="button-hover pagination-button"
        onClick={() => changePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

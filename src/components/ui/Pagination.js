import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = ({ searchQuery, currentPage, totalPages, totalResults }) => {
  if (totalPages < 2) return null;

  let numSquares = 5;
  let toSub = 2;
  if(currentPage === 1 || currentPage === totalPages){
    numSquares = 7;
  }
  if(currentPage === 2 || currentPage === totalPages-1){
    numSquares = 6;
  }
  if(currentPage === totalPages){
    toSub = 4;
  }
  if(currentPage === totalPages-1){
    toSub = 3;
  }

  const toLink = page => {
    let limitedPage = page;
    if (page < 1) limitedPage = 1;
    if (page > totalPages) limitedPage = totalPages;
    return `/search?q=${searchQuery.replace(" ", "+")}&p=${limitedPage}`;
  };

  return (
    <div className="pagination-wrapper animate-popup-2">
      <ul className="pagination" role="menubar" aria-label="Pagination">
        <li>
          <Link to={toLink(1)}>
            <span>&laquo;</span>
          </Link>
        </li>
        <li>
          <Link to={toLink(currentPage - 1)}>
            <span>&lsaquo;</span>
          </Link>
        </li>

        {totalPages > 8
          ? [...Array(numSquares).keys()].map(x => {
              const pageToShow = currentPage + x - toSub;
              if(pageToShow > 0 && pageToShow < totalPages+1)
              return (
                <li
                  key={pageToShow - 1}
                  className={x === toSub ? "current" : ""}
                >
                  <Link to={toLink(pageToShow)}>
                    {pageToShow}
                  </Link>
                </li>
              );
              else return null;
            })
          : [...Array(totalPages).keys()].map(x => (
              <li key={x} className={x === currentPage - 1 ? "current" : ""}>
                <Link to={toLink(x + 1)}>{x + 1}</Link>
              </li>
            ))}
        <li>
          <Link to={toLink(currentPage + 1)}>
            <span>&rsaquo;</span>
          </Link>
        </li>
        <li>
          <Link to={toLink(totalPages)}>
            <span>&raquo;</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

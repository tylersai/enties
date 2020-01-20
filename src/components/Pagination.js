import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = ({ searchQuery, currentPage, totalPages, totalResults }) => {
  if (totalPages < 2) return null;

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
          ? [...Array(5).keys()].map(x => {
              const pageToShow = currentPage + x - 2;
              if(pageToShow > 0 && pageToShow < totalPages+1)
              return (
                <li
                  key={pageToShow - 1}
                  className={x === 2 ? "current" : ""}
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

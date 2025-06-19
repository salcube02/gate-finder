'use client'

import { useMemo } from "react";

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange = () => {},
  totalItems = 0,
  itemsPerPage = 8 
}) => {
  
  // Use props with defaults
  const activePage = currentPage;
  const totalPagesCount = totalPages;
  const handlePageChangeCallback = onPageChange;
  const totalItemsCount = totalItems;
  const itemsPerPageCount = itemsPerPage;
  
  // Calculate pagination display logic
  const paginationData = useMemo(() => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPagesCount, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Calculate display info
    const startItem = (activePage - 1) * itemsPerPageCount + 1;
    const endItem = Math.min(activePage * itemsPerPageCount, totalItemsCount);

    return {
      startPage,
      endPage,
      startItem,
      endItem,
      showEllipsisStart: startPage > 2,
      showEllipsisEnd: endPage < totalPagesCount - 1
    };
  }, [activePage, totalPagesCount, totalItemsCount, itemsPerPageCount]);

  const { startPage, endPage, startItem, endItem, showEllipsisStart, showEllipsisEnd } = paginationData;

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPagesCount && page !== activePage) {
      handlePageChangeCallback(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Don't render if there's only one page or no pages
  if (totalPagesCount <= 1) {
    return null;
  }

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        {/* Previous button */}
        <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#" 
            tabIndex={activePage === 1 ? "-1" : undefined}
            aria-disabled={activePage === 1}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(activePage - 1);
            }}
          >
            <span className="flaticon-left-arrow"></span>
          </a>
        </li>

        {/* First page if not in visible range */}
        {startPage > 1 && (
          <li className="page-item">
            <a 
              className="page-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(1);
              }}
            >
              1
            </a>
          </li>
        )}

        {/* Ellipsis if needed */}
        {showEllipsisStart && (
          <li className="page-item">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Page numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <li key={page} className={`page-item ${page === activePage ? 'active' : ''}`}>
              <a 
                className="page-link" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
                {page === activePage && <span className="sr-only">(current)</span>}
              </a>
            </li>
          );
        })}

        {/* Ellipsis if needed */}
        {showEllipsisEnd && (
          <li className="page-item">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Last page if not in visible range */}
        {endPage < totalPagesCount && (
          <li className="page-item">
            <a 
              className="page-link" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(totalPagesCount);
              }}
            >
              {totalPagesCount}
            </a>
          </li>
        )}

        {/* Next button */}
        <li className={`page-item ${activePage === totalPagesCount ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#"
            tabIndex={activePage === totalPagesCount ? "-1" : undefined}
            aria-disabled={activePage === totalPagesCount}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(activePage + 1);
            }}
          >
            <span className="flaticon-right-arrow"></span>
          </a>
        </li>
      </ul>

      {/* Pagination info */}
      <p className="mt10 pagination_info text-muted">
        Showing {startItem}-{endItem} of {totalItemsCount} properties
      </p>
    </div>
  );
};

export default Pagination;

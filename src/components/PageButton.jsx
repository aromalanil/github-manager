import React from 'react';

function PageButton({ pageNumber, pageChange }) {
  return (
    <>
      {pageNumber && (
        <button
          onClick={() => {
            pageChange(pageNumber);
          }}>
          {pageNumber}
        </button>
      )}
    </>
  );
}

export default PageButton;

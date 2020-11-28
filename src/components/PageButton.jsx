import React from 'react';

function PageButton({ pageNumber, pageChange, icon }) {
  return (
    <button
      className="page-button"
      disabled={pageNumber === null}
      onClick={() => {
        pageChange(pageNumber);
      }}>
      {icon}
    </button>
  );
}

export default PageButton;

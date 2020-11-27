import React from 'react';
import PageButton from './PageButton.jsx';

function PaginationController({
  hide,
  firstPage,
  lastPage,
  prevPage,
  nextPage,
  currentPage,
  triggerSearch,
}) {
  const handleButtonClick = (pageNumber) => {
    triggerSearch(pageNumber);
  };

  if (hide) return <></>;

  return (
    <>
      <PageButton pageNumber={firstPage} pageChange={handleButtonClick} />
      <PageButton pageNumber={prevPage} pageChange={handleButtonClick} />
      {currentPage}
      <PageButton pageNumber={nextPage} pageChange={handleButtonClick} />
      <PageButton pageNumber={lastPage} pageChange={handleButtonClick} />
    </>
  );
}

export default PaginationController;

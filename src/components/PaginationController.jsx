import React from 'react';
import PageButton from './PageButton.jsx';
import { IoPlayForward, IoPlayBack, IoCaretForward, IoCaretBack } from 'react-icons/io5';

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
    <div className="pagination-control">
      <div className="icon-grp">
        <PageButton pageNumber={firstPage} icon={<IoPlayBack />} pageChange={handleButtonClick} />
        <PageButton pageNumber={prevPage} icon={<IoCaretBack />} pageChange={handleButtonClick} />
      </div>
      <div className="current-page">{currentPage}</div>
      <div className="icon-grp">
        <PageButton
          pageNumber={nextPage}
          icon={<IoCaretForward />}
          pageChange={handleButtonClick}
        />
        <PageButton pageNumber={lastPage} icon={<IoPlayForward />} pageChange={handleButtonClick} />
      </div>
    </div>
  );
}

export default PaginationController;

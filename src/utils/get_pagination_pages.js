const parse = require('parse-link-header');

/**
 * A function to get the possible pages for navigation through pagination.
 *
 * @param {string} linkHeader The link header from API response
 * @param {number} [currentPage=1] The current page index.
 * @returns {Object} The details of pagination pages.
 */
const getPaginationPages = async (linkHeader, currentPage = 1) => {
  if (!linkHeader) return {};
  const parsedObj = await  parse(linkHeader);
  const paginationPages = {
    firstPage: parsedObj.first ? parsedObj.first.page : null,
    lastPage: parsedObj.last ? parsedObj.last.page : null,
    prevPage: parsedObj.prev ? parsedObj.prev.page : null,
    nextPage: parsedObj.next ? parsedObj.next.page : null,
    currentPage,
  };

  return paginationPages;
};

export default getPaginationPages;

/**
 *
 * A function to generate Github API URL.
 *
 * @param {string} category 'users' or 'repositories' based on what to search
 * @param {string} query The search query
 * @param {number|string} [pageNumber=1] Page number of result from API.
 * @param {number|string} [perPage=20] No of results per Page
 * @returns {string} The Github API URL.
 */
const getGithubURL = (category, query, pageNumber = 1, perPage = 20) => {
  if (category !== 'users' && category !== 'repositories') throw new Error('Invalid Category');
  return `https://api.github.com/search/${category}?q=${query}&page=${pageNumber}&per_page=${perPage}`;
};

export default getGithubURL;

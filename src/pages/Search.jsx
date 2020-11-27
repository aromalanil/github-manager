import React, { useState, useRef } from 'react';
import axios from 'axios';
import getGithubURL from '../utils/get_github_url';
import getPaginationPages from '../utils/get_pagination_pages';
import PaginationController from '../components/PaginationController';
import SearchResult from '../components/SearchResult';

function Search() {
  const categorySelect = useRef(null);
  const queryInput = useRef(null);
  const [apiData, setApiData] = useState({
    data: null,
    category: null,
    loading: false,
    error: false,
    pages: null,
  });

  const triggerSearch = (pageNumber) => {
    const query = queryInput.current.value;
    if (query !== '') {
      setApiData({
        ...apiData,
        loading: true,
        error: false,
      });
      const category = categorySelect.current.value;
      const githubURL = getGithubURL(category, query, pageNumber);
      axios(githubURL)
        .then(async (res) => {
          const newApiData = {
            data: res.data.items,
            category: category,
            pages: await getPaginationPages(res.headers.link, pageNumber),
            loading: false,
            error: false,
          };
          setApiData(newApiData);
        })
        .catch(() => {
          const newApiData = {
            ...apiData,
            error: true,
            loading: false,
          };
          setApiData(newApiData);
        });
    }
  };

  return (
    <>
      <input type="text" ref={queryInput} />
      <select ref={categorySelect}>
        <option value="users">Users</option>
        <option value="repositories">Repositories</option>
      </select>
      <button onClick={() => triggerSearch()}>Search</button>
      <SearchResult {...apiData} />
      <PaginationController
        hide={apiData.loading || apiData.error}
        {...apiData.pages}
        triggerSearch={triggerSearch}
      />
    </>
  );
}

export default Search;

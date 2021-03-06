import React from 'react';
import UserList from './UserList';
import RepositoryList from './RepositoryList';
import Loader from '../components/Loader';

function SearchResult({ data, category, loading, error }) {
  if (loading) return <Loader />;
  if (error) return <p>Error</p>;
  if (!data) return <></>;

  return (
    <>
      {category === 'users' ? (
        <UserList userData={data} />
      ) : (
        <RepositoryList RepositoryData={data} />
      )}
    </>
  );
}

export default SearchResult;

import React from 'react';
import { useRepositories, useUpdateRepositories } from '../context/repositories';

function RepositoryCard({ name, description, language, forks, issues }) {
  const repositories = useRepositories();
  const updateRepositories = useUpdateRepositories();

  const isRepositorySaved = repositories.some((repository) => repository.name === name);

  const addRepository = () => {
    const newRepository = {
      name,
      description,
      language,
      forks,
      issues,
    };
    updateRepositories([...repositories, newRepository]);
  };

  const removeRepository = () => {
    const newArray = repositories.filter((repository) => repository.name !== name);
    updateRepositories(newArray);
  };
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Language: {language}</p>
      <p>Forks: {forks}</p>
      <p>Issues: {issues}</p>
      {isRepositorySaved ? (
        <button onClick={() => removeRepository()}>Remove</button>
      ) : (
        <button onClick={() => addRepository()}>Add</button>
      )}
    </div>
  );
}

export default RepositoryCard;

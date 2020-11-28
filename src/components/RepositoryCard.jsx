import React from 'react';
import { useRepositories, useUpdateRepositories } from '../context/repositories';
import Badge from './Badge';
import { BiGitRepoForked } from 'react-icons/bi';
import { GoIssueOpened } from 'react-icons/go';

function RepositoryCard({ name, description, language, forks, issues }) {
  const repositories = useRepositories();
  const updateRepositories = useUpdateRepositories();

  const isRepositorySaved = repositories.some((repository) => repository.full_name === name);

  const addRepository = () => {
    const newRepository = {
      full_name: name,
      description,
      language,
      forks_count: forks,
      open_issues: issues,
    };
    updateRepositories([...repositories, newRepository]);
  };

  const removeRepository = () => {
    const newArray = repositories.filter((repository) => repository.full_name !== name);
    updateRepositories(newArray);
  };
  return (
    <div className="repo-card">
      <Badge content={language || 'Unknown'} />
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <div className="stats">
        <IconData data={forks} icon={<BiGitRepoForked />} />
        <IconData data={issues} icon={<GoIssueOpened />} />
      </div>
      {isRepositorySaved ? (
        <button onClick={() => removeRepository()}>Remove</button>
      ) : (
        <button onClick={() => addRepository()}>Add</button>
      )}
    </div>
  );
}

function IconData({ icon, data }) {
  return (
    <div className="icon-data">
      {icon}
      <span>{data}</span>
    </div>
  );
}

export default RepositoryCard;

import React from 'react';
import RepositoryCard from './RepositoryCard';

function RepositoryList({ RepositoryData }) {
  return (
    <div className="repo-list">
      {RepositoryData.map((repository) => {
        return (
          <RepositoryCard
            key={repository.id}
            name={repository.full_name}
            description={repository.description}
            url={repository.html_url}
            language={repository.language}
            forks={repository.forks_count}
            issues={repository.open_issues}
          />
        );
      })}
    </div>
  );
}

export default RepositoryList;

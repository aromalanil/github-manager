import React, { useContext, useState, useEffect } from 'react';

const RepositoriesContext = React.createContext();
const RepositoriesUpdateContext = React.createContext();

export function useRepositories() {
  return useContext(RepositoriesContext);
}

export function useUpdateRepositories() {
  return useContext(RepositoriesUpdateContext);
}

export default function RepositoriesProvider({ children }) {
  const [repositories, setRepositories] = useState(getRepositories());

  useEffect(() => {
    const jsonData = JSON.stringify(repositories);
    localStorage.setItem('repositories', jsonData);
  }, [repositories]);

  return (
    <RepositoriesContext.Provider value={repositories}>
      <RepositoriesUpdateContext.Provider value={setRepositories}>
        {children}
      </RepositoriesUpdateContext.Provider>
    </RepositoriesContext.Provider>
  );
}

function getRepositories() {
  const repositoriesArray = localStorage.getItem('repositories');
  return repositoriesArray ? JSON.parse(repositoriesArray) : [];
}

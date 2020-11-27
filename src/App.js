import React from 'react';
import Search from './pages/Search';
import RepositoriesProvider from './context/repositories';
import UsersProvider from './context/users';

function App() {
  return (
    <div>
      <RepositoriesProvider>
        <UsersProvider>
          <Search />
        </UsersProvider>
      </RepositoriesProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { useUsers } from '../context/users';
import { useRepositories } from '../context/repositories';
import UserList from '../components/UserList';
import RepositoryList from '../components/RepositoryList';
import { Link } from 'react-router-dom';

function Home() {
  const users = useUsers();
  const repositories = useRepositories();

  const usersEmpty = users.length === 0;
  const repoEmpty = repositories.length === 0;

  return (
    <div className="home">
      <div className="users-section">
        <div className="home-header">
          <h2>Saved Users</h2>
          <Link to="/search">
            <button>Add Users</button>
          </Link>
        </div>
        {usersEmpty && <EmptyMessage message="No Saved Users" />}
        <UserList userData={users} />
      </div>
      <div className="repo-section">
        <div className="home-header">
          <h2>Saved Repos</h2>
          <Link to="/search">
            <button>Add Repos</button>
          </Link>
        </div>
        {repoEmpty && <EmptyMessage message="No Saved Repositories" />}
        <RepositoryList RepositoryData={repositories} />
      </div>
    </div>
  );
}

function EmptyMessage({ message }) {
  return (
    <div className="empty-msg">
      <p>{message}</p>
    </div>
  );
}

export default Home;

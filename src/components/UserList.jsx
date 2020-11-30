import React from 'react';
import UserCard from './UserCard';

function UserList({ userData }) {
  return (
    <div className="user-list">
      {userData.map((user) => {
        return (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
          />
        );
      })}
    </div>
  );
}

export default UserList;

import React from 'react';
import { useUsers, useUpdateUsers } from '../context/users';

function UserCard({ username, avatar, url, id }) {
  const users = useUsers();
  const updateUsers = useUpdateUsers();

  const isUserSaved = users.some((user) => user.login === username);

  const addUser = () => {
    const newUser = {
      login: username,
      avatar_url: avatar,
      html_url: url,
      id,
    };
    updateUsers([...users, newUser]);
  };

  const removeUser = () => {
    const newArray = users.filter((user) => user.login !== username);
    updateUsers(newArray);
  };

  return (
    <div className="user-card">
      <div className="card-top"></div>
      <div className="card-bottom">
        <div className="img-wrapper">
          <img width="100" src={avatar} alt="user_image" />
        </div>
        <h3 className="username">{username}</h3>
        {isUserSaved ? (
          <button onClick={() => removeUser()}>Remove</button>
        ) : (
          <button onClick={() => addUser()}>Add</button>
        )}
      </div>
    </div>
  );
}
export default UserCard;

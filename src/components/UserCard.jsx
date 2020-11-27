import React from 'react';
import { useUsers, useUpdateUsers } from '../context/users';

function UserCard({ username, avatar, url }) {
  const users = useUsers();
  const updateUsers = useUpdateUsers();

  const isUserSaved = users.some((user) => user.username === username);

  const addUser = () => {
    const newUser = {
      username,
      avatar,
      url,
    };
    updateUsers([...users, newUser]);
  };

  const removeUser = () => {
    const newArray = users.filter((user) => user.username !== username);
    updateUsers(newArray);
  };

  return (
    <div className="user-card">
      <h2>{username}</h2>
      <img width="100" src={avatar} alt="user_image" />
      <a href={url}>Visit</a>
      {isUserSaved ? (
        <button onClick={() => removeUser()}>Remove</button>
      ) : (
        <button onClick={() => addUser()}>Add</button>
      )}
    </div>
  );
}
export default UserCard;

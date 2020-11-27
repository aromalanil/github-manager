import React, { useContext, useState, useEffect } from 'react';

const UsersContext = React.createContext();
const UsersUpdateContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function useUpdateUsers() {
  return useContext(UsersUpdateContext);
}

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState(getUsers());

  useEffect(() => {
    const jsonData = JSON.stringify(users);
    localStorage.setItem('users', jsonData);
  }, [users]);

  return (
    <UsersContext.Provider value={users}>
      <UsersUpdateContext.Provider value={setUsers}>{children}</UsersUpdateContext.Provider>
    </UsersContext.Provider>
  );
}

function getUsers() {
  const userArray = localStorage.getItem('users');
  return userArray ? JSON.parse(userArray) : [];
}

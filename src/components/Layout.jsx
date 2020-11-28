import React from 'react';
import NavBar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
 
export default Layout;

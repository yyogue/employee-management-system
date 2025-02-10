import React from 'react';
import EmployeeList from '../EmployeeList/EmployeeList';
import NavBar from '../NavBar/NavBar';
// import DecConAjout from '../DecConAjout/DecConAjout';

function Home({ user, handleLogout, admins, employees }) {
  return (
    <>
      <NavBar user={user} onLogout={handleLogout} admins={admins} employees={employees} />
      <EmployeeList admins={admins} employees={employees} />
      {/* <DecConAjout /> */}
    </>
  );
}

export default Home;

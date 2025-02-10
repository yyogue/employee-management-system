import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import { getAllAdmins, getAllEmployees } from './services/api';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Home from './components/Home/Home';
import DecConAjout from './components/DecConAjout/DecConAjout';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [admins, setAdmins] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminResponse, employeeResponse] = await Promise.all([getAllAdmins(), getAllEmployees()]);

        console.log('Admins:', adminResponse.data.admins);
        console.log('Employees:', employeeResponse.data.personnels);

        setAdmins(adminResponse.data.admins);
        setEmployees(employeeResponse.data.personnels);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // This will automatically redirect to /login
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} handleLogout={handleLogout} admins={admins} employees={employees} /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/ajout"
          element={user ? <DecConAjout user={user} /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to the home page */}
      </Routes>
    </Router>
  );
}

export default App;

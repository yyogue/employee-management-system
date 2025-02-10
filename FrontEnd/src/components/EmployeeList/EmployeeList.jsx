import React from 'react';
import Tables from '../Tables/Tables';
import './EmployeeList.css'

const EmployeeList = ({ admins, employees }) => {
  if (!Array.isArray(admins) || !Array.isArray(employees)) {
    return <div>No data available or still loading...</div>;
  }

  const employeeData = employees.filter(
    (employee) =>
      !admins.some(
        (admin) =>
          admin.nom === employee.nom &&
          admin.postNom === employee.postNom &&
          admin.preNom === employee.preNom &&
          admin.dateDeNaissance === employee.dateDeNaissance
      )
  );

  return (
    <div>
      <h2 id='cadre'>Cadres</h2>
      <Tables data={admins} />
      <h2 id='personnel'>Personnels</h2>
      <Tables data={employeeData} />
    </div>
  );
};

export default EmployeeList;

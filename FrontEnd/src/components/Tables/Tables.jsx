import React from 'react';
import Table from 'react-bootstrap/Table';

const Tables = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Matricule</th>
          <th>Nom</th>
          <th>Post-Nom</th>
          <th>Prénom</th>
          <th>Date / Lieu de Naissance</th>
          <th>Fonction</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.companyId || 'N/A'}</td> {/* Company ID */}
            <td>{item.nom}</td> {/* Nom */}
            <td>{item.postNom}</td> {/* Post Nom */}
            <td>{item.preNom}</td> {/* Prénom */}
            <td>{`${item.dateDeNaissance} / ${item.villeDeNaissance}`}</td> {/* Date/Lieu de Naissance */}
            <td>{item.role}</td> {/* Fonction */}
            <td>{`${item.address}, ${item.commune}, ${item.quartier}`}</td> {/* Adresse */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;

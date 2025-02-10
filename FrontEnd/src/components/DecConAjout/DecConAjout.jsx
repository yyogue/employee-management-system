import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DecConAjout.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addEmployee } from '../../services/api';

function DecConAjout({ user }) {
  const [formData, setFormData] = useState({
    nom: '',
    postNom: '',
    preNom: '',
    sex: '',
    dateDeNaissance: '',
    villeDeNaissance: '',
    dateEngagement: '',
    numeroDeTelephone: '',
    role: '',
    departement: '',
    address: '',
    quartier: '',
    commune: '',
    ville: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Payload:', formData);

    try {
      const adminId = user._id; // Now `user` is defined and passed in
      const dataToSend = { ...formData, admin: adminId };
      await addEmployee(dataToSend);
      // alert('Employee added successfully!');
      
      // Refresh the employee list and navigate back to the home page
      navigate('/', { replace: true }); // Navigate to home
      window.location.reload(); // Force a reload to get the latest data
    } catch (error) {
      console.error('Error adding employee:', error.response?.data || error.message);
      alert('Failed to add employee. Please try again.');
    }
  };

  return (
    <div className="conForm">
      <Form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              isInvalid={!!errors.nom}
            />
            <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formPostName">
            <Form.Label>Post-Nom</Form.Label>
            <Form.Control
              name="postNom"
              value={formData.postNom}
              onChange={handleChange}
              isInvalid={!!errors.postNom}
            />
            <Form.Control.Feedback type="invalid">{errors.postNom}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              name="preNom"
              value={formData.preNom}
              onChange={handleChange}
              isInvalid={!!errors.preNom}
            />
            <Form.Control.Feedback type="invalid">{errors.preNom}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formSex">
            <Form.Label>Sex</Form.Label>
            <Form.Select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              isInvalid={!!errors.sex}
            >
              <option value="">Choose...</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.sex}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formDateDeNaissance">
            <Form.Label>Date de Naissance</Form.Label>
            <Form.Control
              type="date"
              name="dateDeNaissance"
              value={formData.dateDeNaissance}
              onChange={handleChange}
              isInvalid={!!errors.dateDeNaissance}
            />
            <Form.Control.Feedback type="invalid">{errors.dateDeNaissance}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formVilleDeNaissance">
            <Form.Label>Ville de Naissance</Form.Label>
            <Form.Control
              name="villeDeNaissance"
              value={formData.villeDeNaissance}
              onChange={handleChange}
              isInvalid={!!errors.villeDeNaissance}
            />
            <Form.Control.Feedback type="invalid">{errors.villeDeNaissance}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Job Details */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDateEngagement">
            <Form.Label>Date d'Engagement</Form.Label>
            <Form.Control
              type="date"
              name="dateEngagement"
              value={formData.dateEngagement}
              onChange={handleChange}
              isInvalid={!!errors.dateEngagement}
            />
            <Form.Control.Feedback type="invalid">{errors.dateEngagement}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formNumeroDeTelephone">
            <Form.Label>Numéro de Téléphone</Form.Label>
            <Form.Control
              type="number"
              name="numeroDeTelephone"
              value={formData.numeroDeTelephone}
              onChange={handleChange}
              isInvalid={!!errors.numeroDeTelephone}
            />
            <Form.Control.Feedback type="invalid">{errors.numeroDeTelephone}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formRole">
            <Form.Label>Rôle</Form.Label>
            <Form.Control
              name="role"
              value={formData.role}
              onChange={handleChange}
              isInvalid={!!errors.role}
            />
            <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formDepartement">
            <Form.Label>Département</Form.Label>
            <Form.Control
              name="departement"
              value={formData.departement}
              onChange={handleChange}
              isInvalid={!!errors.departement}
            />
            <Form.Control.Feedback type="invalid">{errors.departement}</Form.Control.Feedback>
          </Form.Group>
        </Row>


        {/* Address Details */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAddress">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              name="address"
              value={formData.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formQuartier">
            <Form.Label>Quartier</Form.Label>
            <Form.Control
              name="quartier"
              value={formData.quartier}
              onChange={handleChange}
              isInvalid={!!errors.quartier}
            />
            <Form.Control.Feedback type="invalid">{errors.quartier}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formCommune">
            <Form.Label>Commune</Form.Label>
            <Form.Control
              name="commune"
              value={formData.commune}
              onChange={handleChange}
              isInvalid={!!errors.commune}
            />
            <Form.Control.Feedback type="invalid">{errors.commune}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formVille">
            <Form.Label>Ville</Form.Label>
            <Form.Control
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              isInvalid={!!errors.ville}
            />
            <Form.Control.Feedback type="invalid">{errors.ville}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="conFormButton">
          <Button variant="secondary" onClick={() => navigate('/')}>
            Retour
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DecConAjout;

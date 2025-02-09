const mongoose = require('mongoose');
const Personnel = require('../models/personnel');
const Admin = require('../models/admin');

// Function to generate a sequential numeric ID
const generateId = async () => {
  const count = await Personnel.countDocuments(); // Count existing Personnel
  return count + 1; // New ID is the total count + 1
};

// Get all personnel
const toutPersonnel = async (req, res, next) => {
  try {
    const personnels = await Personnel.find();
    if (!personnels.length) {
      return res.status(404).json({ message: "La liste est pour le moment vide" });
    }
    return res.status(200).json({ personnels });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

const ajoutPersonel = async (req, res, next) => {
  console.log('Incoming request:', req.body);
  const companyId = await generateId(); // Generate the company ID
  const {
    nom,
    postNom,
    preNom,
    sex,
    dateEngagement,
    dateDeNaissance,
    role,
    departement,
    numeroDeTelephone,
    address,
    quartier,
    commune,
    ville,
    villeDeNaissance,
    admin,
  } = req.body;

  console.log("Received Data:", req.body); // Log received data for debugging

  try {
    const existingAdmin = await Admin.findById(admin);
    if (!existingAdmin) {
      return res.status(400).json({ message: "Admin ID is invalid or missing." });
    }

    const personnel = new Personnel({
      companyId,
      nom,
      postNom,
      preNom,
      sex,
      dateEngagement,
      dateDeNaissance,
      role,
      departement,
      numeroDeTelephone,
      address,
      quartier,
      commune,
      ville,
      villeDeNaissance,
      admin,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await personnel.save({ session });
    existingAdmin.personnels.push(personnel);
    await existingAdmin.save({ session });
    await session.commitTransaction();

    return res.status(201).json({ personnel });
  } catch (error) {
    console.error("Error in ajoutPersonel:", error.message);
    return res.status(500).json({ message: "Failed to add personnel. Check input data." });
  }
};


// Update personnel
const updatePersonel = async (req, res, next) => {
  const { personnelId } = req.params;
  const { 
    nom, 
    postNom, 
    preNom, 
    sex, 
    dateEngagement, 
    dateDeNaissance, 
    role, 
    departement, 
    numeroDeTelephone, 
    address, 
    quartier, 
    commune, 
    ville, 
    villeDeNaissance 
  } = req.body;

  try {
    const personel = await Personnel.findByIdAndUpdate(personnelId, {
      nom,
      postNom,
      preNom,
      sex,
      dateEngagement,
      dateDeNaissance,
      role,
      departement,
      numeroDeTelephone,
      address,
      quartier,
      commune,
      ville,
      villeDeNaissance
    }, { new: true });
    
    if (!personel) {
      return res.status(404).json({ message: `Personnel avec ID: ${personnelId} est introuvable` });
    }

    return res.status(200).json({ personel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// Get personnel by ID
const parId = async (req, res, next) => {
  const { personnelId } = req.params;

  try {
    const personel = await Personnel.findById(personnelId);
    if (!personel) {
      return res.status(404).json({ message: 'Aucun personnel trouvé' });
    }
    return res.status(200).json(personel);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// Delete personnel
const retirer = async (req, res, next) => {
  const { personnelId } = req.params;

  try {
    const personel = await Personnel.findByIdAndDelete(personnelId).populate('admin');
    if (!personel) {
      return res.status(404).json({ message: 'Personnel pas trouvé' });
    }

    const admin = personel.admin;
    admin.personnels.pull(personel);
    await admin.save();

    return res.status(200).json({ message: "Personnel retiré de la base de données avec succès" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// Get admin and their personnel by admin ID
const adminParId = async (req, res, next) => {
  const { adminId } = req.params;

  try {
    const adminPersonnel = await Admin.findById(adminId).populate('personnels');
    if (!adminPersonnel) {
      return res.status(404).json({ message: 'Aucun personnel trouvé' });
    }
    return res.status(200).json({ personnels: adminPersonnel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = { toutPersonnel, ajoutPersonel, updatePersonel, parId, retirer, adminParId };

const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

// Function to generate unique ID
const generateId = async () => {
  const currentDate = new Date();
  const prefix = 'DEC'; // Change this to your desired prefix
  const monthYear = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear()}`;
  const departmentCode = 'AA'; // Change this based on your needs

  // Get the last sequence number used for the current month and year
  const lastAdmin = await Admin.findOne().sort({ createdAt: -1 });

  let sequenceNumber = 1; // Default to 1 if no previous records

  if (lastAdmin) {
    const lastId = lastAdmin.companyId; // Assuming the ID is stored in a field called `companyId`
    const lastSequence = parseInt(lastId.slice(-3), 10); // Get the last 3 digits
    sequenceNumber = lastSequence + 1;
  }

  // Format the new ID
  const newId = `${prefix}-${monthYear}-${departmentCode}${sequenceNumber.toString().padStart(3, '0')}`;
  return newId;
};

// Tous les Admin personels
const toutAdmin = async (req, res, next) => {
  console.log("Fetching all admins...");
  try {
    const admins = await Admin.find();
    if (!admins.length) {
      return res.status(404).json({ message: "Personel introuvable" });
    }
    return res.status(200).json({ admins });
  } catch (error) {
    console.error(`Une erreur s'est produite dans toutAdmin: `, error);
    return res.status(500).json({ error: 'Erreur server' });
  }
};

// Ajout Admin personel
const ajoutAdmin = async (req, res) => {
  const { nom, postNom, preNom, sex, dateEngagement, email, motDePasse, dateDeNaissance, role, departement, numeroDeTelephone, address, quartier, commune, ville, villeDeNaissance } = req.body;

  try {
    const existingNom = await Admin.findOne({ nom, postNom, preNom });
    const existingEmail = await Admin.findOne({ email });

    if (existingNom) {
      return res.status(400).json({ message: 'Employé déjà dans le système' });
    }

    if (existingEmail) {
      return res.status(400).json({ message: 'Email déjà utilisé par un personnel' });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 6);
    const companyId = await generateId(); // Generate the company ID

    const admin = new Admin({
      companyId, // Include the generated company ID
      nom,
      postNom,
      preNom,
      sex,
      dateEngagement,
      email,
      motDePasse: hashedPassword,
      dateDeNaissance,
      role,
      departement,
      numeroDeTelephone,
      address,
      quartier,
      commune,
      ville,
      villeDeNaissance
    });

    await admin.save();
    return res.status(201).json({ message: 'Le personnel a été ajouté 🎉' });
  } catch (error) {
    console.error(`Une erreur s'est produite lors de l'ajoutAdmin: `, error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Se connecter
const seConnecter = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    // Check if both email and password are provided
    if (!email || !motDePasse) {
      return res.status(400).json({ message: 'Email et mot de passe sont nécessaires' });
    }

    // Find the admin by email
    const existingPersonel = await Admin.findOne({ email });
    
    if (!existingPersonel) {
      return res.status(404).json({ message: 'Personnel pas trouvé avec cet email' });
    }

    // Debugging logs
    console.log('Provided Password:', motDePasse);
    console.log('Hashed Password from DB:', existingPersonel.motDePasse);

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(motDePasse, existingPersonel.motDePasse);
    
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    return res.status(200).json(existingPersonel);
  } catch (error) {
    console.error(`Une erreur s'est produite lors de la connexion: `, error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};


module.exports = { toutAdmin, ajoutAdmin, seConnecter };

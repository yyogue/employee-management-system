const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnelSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  postNom: {
    type: String,
    required: true
  },
  preNom: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  dateDeNaissance: {
    type: String,
    required: true
  },
  dateEngagement: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  departement: {
    type: String,
    required: true
  },
  numeroDeTelephone: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  quartier: {
    type: String,
    required: true
  },
  commune: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  villeDeNaissance: {
    type: String,
    required: true
  },
  companyId: {
    type: Number, // Sequential numeric ID
    required: true,
    unique: true
  },
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    required: true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Personnel", personnelSchema);

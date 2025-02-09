const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema({
  nom: {
    type: String,
    require: true
  },
  postNom: {
    type: String,
    require: true
  },
  preNom: {
    type: String,
    require: true
  },
  sex: {
    type: String,
    require: true
  },
  dateDeNaissance: {
    type: String,
    require: true
  },
  dateEngagement: {
    type: String,
    require: true
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
    type: String,
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
  email: {
    type: String,
    required: true,
    unique: true
  },
  motDePasse: {
    type: String,
    required: true,
    minlength: 6
  },
  companyId: {
    type: String,
    required: true,
    unique: true
  },
  personnels: [{
    type: mongoose.Types.ObjectId,
    ref: "Personnel",
    required: true
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model("Admin", adminSchema);

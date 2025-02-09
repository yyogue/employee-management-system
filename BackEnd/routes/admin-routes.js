const express = require('express');
const adminRouter = express.Router();
const { toutAdmin, ajoutAdmin, seConnecter } = require('../controllers/admin-controller')

adminRouter.get('/all', toutAdmin);
adminRouter.post('/ajout', ajoutAdmin);
adminRouter.post('/connecter', seConnecter);

module.exports = adminRouter;

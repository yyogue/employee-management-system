const express = require('express');
const personnelRouter = express.Router();
const { toutPersonnel, ajoutPersonel, updatePersonel, retirer, parId, adminParId } = require('../controllers/personnel-controller')

personnelRouter.get('/', toutPersonnel);
personnelRouter.post('/ajout', ajoutPersonel);
personnelRouter.put('/update/:personnelId', updatePersonel);
personnelRouter.get('/:personnelId', parId);
personnelRouter.delete('/retire/:personnelId', retirer);
personnelRouter.get('/admin/:adminId', adminParId);

module.exports = personnelRouter;

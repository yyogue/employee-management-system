require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const personnelRouter = require('./routes/personnel-routes');
const adminRouter = require('./routes/admin-routes');


const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.use('/api/personnel', personnelRouter);
app.use('/api/admin', adminRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(8080, () => {
    console.log('API running on port 8080');
  });
  console.log('Connected to MongoDB 🎉');
}).catch((error) => {
  console.error(error);
});

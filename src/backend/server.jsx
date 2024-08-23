const express = require("express");
const sequelize = require('./config/db.config.js');
const { router } = require('../routes/accountsRouter.jsx');
const cors = require("cors");
// const EQUIPMENT = require('../models/equipment');
// const MAC = require('../models/mac');
// const WARDS = require('../models/wards');

const app = express();
const PORT = process.env.PORT || 3030;
app.use(router)
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));
sequelize.authenticate()
  .then(() => {
    console.log('Connection to Oracle DB has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

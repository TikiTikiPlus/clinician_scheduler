const express = require ('express');
const { getAccounts } = require('../controller/accountsController');

const router = express.Router();
router.post('/getAccounts',getAccounts);

module.exports = router;
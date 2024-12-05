const { Router } = require("express");
const router = Router();
const clientController = require('../controllers/ClientController');

router.post('/', clientController.create);


module.exports = router;
const { Router } = require("express");
const router = Router();
const clientController = require('../controllers/ClientController');
const { validateClient, validateClientId } = require("../middlewares/validadeClient");

router.post('/', validateClient, clientController.create);

router.put('/:id', validateClient, clientController.update);

router.delete('/:id', validateClientId, clientController.delete);

router.get('/:id', validateClientId, clientController.getOne);

router.get('/', clientController.getAll);

module.exports = router;
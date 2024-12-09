const { Router } = require("express");
const router = Router();
const { valideteAdmin, valideteAdminId} = require("../middlewares/validadeAdmin");
const adminController = require('../controllers/AdminController');

router.post('/', valideteAdmin, adminController.create);
router.post('/login', adminController.login);
router.get('/', adminController.getAll);
router.get('/:id', valideteAdminId, adminController.getOne);
router.put('/:id', valideteAdmin, adminController.update);
router.delete('/:id', valideteAdminId, adminController.delete);


module.exports = router;
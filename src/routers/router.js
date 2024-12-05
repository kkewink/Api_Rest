const { Router } = require("express");
const router = Router();
const clientRoutes = require('./clientRoutes');
const adminRoutes = require('./clientRoutes');

router.use('/client', clientRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
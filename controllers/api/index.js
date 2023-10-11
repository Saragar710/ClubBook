const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./clubRoutes');

router.use('/users', userRoutes);
router.use('/clubs', clubRoutes);

module.exports = router;

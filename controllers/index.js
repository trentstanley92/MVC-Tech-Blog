const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./DashboardRoutes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
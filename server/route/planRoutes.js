// server/routes/planRoutes.js

const express = require('express');
const { createPlan, getUserPlans, updatePlan, deletePlan } = require('../controllers/planController');
const router = express.Router();

router.post('/', createPlan);
router.get('/', getUserPlans);
router.put('/:id', updatePlan);
router.delete('/:id', deletePlan);

module.exports = router;

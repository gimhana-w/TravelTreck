import express from "express";
import {createFeedback, getAllFeedbacks, getAllPendingFeedbacks, getAllApprovedFeedbacks, getAllRejectedFeedbacks, getFeedbackById, updateFeedback, deleteFeedback} from "../controllers/feedbackController.js"

const router = express.Router();

router.post('/feedback',createFeedback);
router.get('/feedback',getAllFeedbacks);
router.get('/feedback/pending',getAllPendingFeedbacks);
router.get('/feedback/approved',getAllApprovedFeedbacks);
router.get('/feedback/rejected',getAllRejectedFeedbacks);
router.get('/feedback/:id',getFeedbackById);
router.put('/feedback/:id',updateFeedback);
router.delete('/feedback/:id',deleteFeedback);

export default router;
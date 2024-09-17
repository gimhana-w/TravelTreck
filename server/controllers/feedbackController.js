import express from "express";
import Feedback from "../models/Feedback.js";


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const createFeedback = async(req, res) => {
    try{
        const { userName, email, feedbackText, rating } = req.body;

        if (!userName || !email || !feedbackText || !rating) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }
        
        const savedFeedback = await Feedback.create(req.body);
        res.status(201).json(savedFeedback);
    }
    catch(e){
        console.error(e);
        res.status(500).json({ message: 'Server Error' });
    }
}
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const getAllFeedbacks = async(req, res) => {
    try{
        const feedbackList = await Feedback.find({});
        res.status(200).json(feedbackList);
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const getAllPendingFeedbacks = async(req, res) => {
    try {
        const pendingFeedbackList = await Feedback.find({status: 'pending'});
        res.status(200).json(pendingFeedbackList);
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const getAllApprovedFeedbacks = async(req,res) => {
    try {
        const approvedFeedbackList = await Feedback.find({status: 'approved'});
        res.status(200).json(approvedFeedbackList);
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const getAllRejectedFeedbacks = async(req,res) => {
    try {
        const rejectedFeedbackList = await Feedback.find({status: 'rejected'});
        res.status(200).json(rejectedFeedbackList);
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const getFeedbackById = async(req,res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if(!feedback){
            return res.status(404).json({message: "Feedback not found"});
        }
        res.status(200).json(pendingFeedbackList);
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const updateFeedback = async(req,res) => {
    try {
        const { userName, email, feedbackText, rating } = req.body;

        const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { $set: { status: req.body.status } },
            { new: true }
        );

        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        res.status(200).json(updatedFeedback);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res  
 */
export const deleteFeedback = async(req,res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        
        if(!feedback){
            return res.status(404).json({message: "Feedback not found"});
        }
    }
    catch(e){
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    userName : { type: String, required: true },
    email: { type: String, required: true},
    feedbackText: { type: String, required: true },
    rating: { type:Number, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending', enum: ['rejected', 'pending', 'approved']}
});

export default mongoose.model("Feedback",feedbackSchema);
import mongoose from 'mongoose';

const { Schema } = mongoose;

const planSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  destinations: [{ type: Schema.Types.ObjectId, ref: 'Destination' }],
  hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel' }],
  vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }],
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalCost: { type: Number, default: 0 },
}, {
  timestamps: true,  // Correct property for auto timestamps
});

export default mongoose.model('Plan', planSchema);

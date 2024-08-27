<<<<<<< Updated upstream
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } ,
   destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
   hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
   vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
   activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
   startDate: { type: Date, required: true },
   endDate: { type: Date, required: true },
   totalCost: { type: Number, default: 0 },
}, {

    timeseries: true,
});

const Plan = mongoose.model('Plan' , planSchema);

module.exports = Plan;
=======

const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({

    user: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    destination:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
    hotels:
    vehicles:
    activities:
    stratDate:
    endDaete:
    totalCost:
})
>>>>>>> Stashed changes

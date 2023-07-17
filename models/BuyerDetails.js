import mongoose from 'mongoose';

const buyerDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  

});

export default mongoose.models.BuyerDetails ||
  mongoose.model('BuyerDetails', buyerDetailsSchema);

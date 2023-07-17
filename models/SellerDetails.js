import mongoose from 'mongoose';

const sellerDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.models.SellerDetails ||
  mongoose.model('SellerDetails', sellerDetailsSchema);

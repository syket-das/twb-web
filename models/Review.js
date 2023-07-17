import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);

import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({});

export default mongoose.models.Category ||
  mongoose.model('Category', categorySchema);

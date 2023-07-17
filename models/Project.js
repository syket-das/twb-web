import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({});

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema);

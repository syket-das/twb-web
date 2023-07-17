import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },

  image: {
    type: String,
  },

  role: {
    type: String,
    required: [true, 'Please enter your role'],
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);

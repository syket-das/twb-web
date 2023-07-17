import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  country: {
    type: String,
    required: [true, 'Please enter your country'],
  },

  city: {
    type: String,
  },

  address: {
    type: String,
    required: [true, 'Please enter your address'],
  },

  postalCode: {
    type: String,
  },

  contactNumbers: [
    {
      type: String,
      required: [true, 'Please enter your contact number'],
    },
  ],

  dob: {
    type: Date,
    required: [true, 'Please enter your date of birth'],
  },

  userName: {
    type: String,
    required: [true, 'Please enter your user name'],
    maxlength: [20, 'Your user name cannot exceed 20 characters'],
    trim: true,
    unique: true,
  },
});

export default mongoose.models.UserDetails ||
  mongoose.model('UserDetails', userDetailsSchema);

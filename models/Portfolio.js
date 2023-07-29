import mongoose from 'mongoose';
import SellerDetails from './SellerDetails';

const portfoliosSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SellerDetails',
    required: true,
  },

  skills: [
    {
      name: {
        type: String,
        required: true,
      },

      experience: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },
    },
  ],

  title: {
    type: String,
    required: [true, 'Please add a title eg. Web Developer'],
  },

  description: {
    type: String,
    required: [true, 'Please add a description'],
  },

  projects: [
    {
      name: {
        type: String,
        required: [true, 'Please add a project name'],
      },

      description: {
        type: String,
        required: [true, 'Please add a project description'],
      },

      link: {
        type: String,
        required: [true, 'Please add a project link'],
      },
    },
  ],

  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },

  duration: {
    type: Number,
    required: [true, 'Please add a duration'],
  },

  revisions: {
    type: String,
  },

  sourceCode: {
    type: Boolean,
  },

  commercialUse: {
    type: Boolean,
  },

  support: {
    type: Boolean,
  },
});

export default mongoose.models.Portfolio ||
  mongoose.model('Portfolio', portfoliosSchema);

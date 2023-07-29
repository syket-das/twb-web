import mongoose from 'mongoose';

const sellerDetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
          enum: ['Beginner', 'Intermidiate', 'Expert'],
        },

        description: {
          type: String,
        },
      },
    ],

    projects: [
      {
        name: {
          type: String,
          required: [true, 'Please add a project name'],
        },

        description: {
          type: String,
          required: [true, 'Please add a description'],
        },

        link: {
          type: String,
        },
        code: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SellerDetails ||
  mongoose.model('SellerDetails', sellerDetailsSchema);

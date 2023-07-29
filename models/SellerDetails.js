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
        },

        description: {
          type: String,
        },
      },
    ],

    education: [
      {
        name: {
          type: String,
          required: [true, 'Please add a institute name'],
        },

        degree: {
          type: String,
          required: [true, 'Please add a degree'],
        },

        fieldOfStudy: {
          type: String,
          required: [true, 'Please add a field of study'],
        },

        grade: {
          type: String,
          required: [true, 'Please add a grade'],
        },

        startYear: {
          type: Number,
          required: [true, 'Please add a start year'],
        },

        endYear: {
          type: Number,
          required: [true, 'Please add a end year or expected year'],
        },
      },
    ],

    certifications: [
      {
        name: {
          type: String,
          required: [true, 'Please add a certification name'],
        },

        organization: {
          type: String,
          required: [true, 'Please add a organization name'],
        },

        issueDate: {
          type: Date,
          required: [true, 'Please add a issue date'],
        },

        description: {
          type: String,
        },
      },
    ],

    languages: [
      {
        name: {
          type: String,
          required: [true, 'Please add a language name'],
        },

        proficiency: {
          type: String,
          required: [true, 'Please add a proficiency'],
          enum: ['Basic', 'Conversational', 'Fluent', 'Native or Bilingual'],
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SellerDetails ||
  mongoose.model('SellerDetails', sellerDetailsSchema);

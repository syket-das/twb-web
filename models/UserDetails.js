import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    userName: {
      type: String,
      required: [true, 'Please enter your user name'],
      maxlength: [20, 'Your user name cannot exceed 20 characters'],
      trim: true,
      unique: true,
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

    languages: [
      {
        type: String,
        required: [true, 'Please enter your language'],
      },
    ],
    oneLiner: {
      type: String,
    },

    aboutMe: {
      type: String,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    isSeller: {
      type: Boolean,
      default: false,
    },

    sellerDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SellerDetails',
    },

    isBuyer: {
      type: Boolean,
      default: true,
    },

    buyerDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BuyerDetails',
    },

    languages: [
      {
        name: {
          type: String,
          required: [true, 'Please add a language name'],
        },

        proficiency: {
          type: String,
          required: [true, 'Please add a proficiency'],
          default: 'Basic',
          enum: ['Basic', 'Conversational', 'Fluent', 'Native or Bilingual'],
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

    social: {
      youtube: {
        type: String,
      },

      twitter: {
        type: String,
      },

      facebook: {
        type: String,
      },

      linkedin: {
        type: String,
      },

      instagram: {
        type: String,
      },

      github: {
        type: String,
      },

      website: {
        type: String,
      },

      blog: {
        type: String,
      },

      others: [
        {
          name: {
            type: String,
            required: [true, 'Please add a name'],
          },

          link: {
            type: String,
            required: [true, 'Please add a link'],
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.UserDetails ||
  mongoose.model('UserDetails', userDetailsSchema);

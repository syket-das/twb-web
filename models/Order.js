import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserDetails',
    },

    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserDetails',
    },

    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Portfolio',
    },

    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'completed'],
      default: 'pending',
    },

    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },

    isPaid: {
      type: Boolean,
      default: false,
    },

    sellerEarnings: {
      type: Number,
      required: [true, 'Please add a seller earnings'],
    },

    tax: {
      type: Number,
      required: [true, 'Please add a tax'],
    },

    otherCharges: {
      type: Number,
      required: [true, 'Please add a other charges'],
    },

    duration: {
      type: Number,
      required: [true, 'Please add a duration'],
    },

    description: {
      type: String,
      required: [true, 'Please add a description'],
    },

    files: [
      {
        name: {
          type: String,
          required: [true, 'Please add a file name'],
        },

        link: {
          type: String,
          required: [true, 'Please add a file link'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);

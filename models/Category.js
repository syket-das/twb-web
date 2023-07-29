import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter sub category name'],
      trim: true,
      maxLength: [50, 'Sub category name cannot exceed 50 characters'],
    },

    description: {
      type: String,
      required: [true, 'Please enter sub category description'],
      trim: true,
      maxLength: [500, 'Sub category description cannot exceed 500 characters'],
    },

    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model('SubCategory', subCategorySchema);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter category name'],
      trim: true,
      maxLength: [50, 'Category name cannot exceed 50 characters'],
      unique: true,
    },

    description: {
      type: String,
      required: [true, 'Please enter category description'],
      trim: true,
      maxLength: [500, 'Category description cannot exceed 500 characters'],
    },

    icon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category ||
  mongoose.model('Category', categorySchema);

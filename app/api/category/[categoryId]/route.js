import { NextResponse } from 'next/server';
import Category from '@/models/Category';
import { SubCategory } from '@/models/Category';
import dbConnect from '@/utils/mongoose';

export async function POST(req, context) {
  const CategoryId = context.params.categoryId;

  const { name, description, icon } = await req.json();

  if (!name || !description || !icon) {
    return NextResponse.json(
      {
        success: false,
        error: 'Please enter all fields',
      },
      {
        status: 400,
        s,
      }
    );
  }

  await dbConnect();

  try {
    const category = await Category.findById(CategoryId);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: 'Category not found',
        },
        {
          status: 404,
        }
      );
    }

    const subCategory = await SubCategory.create({
      name,
      description,
      icon,
      parent: CategoryId,
    });

    return NextResponse.json({
      success: true,
      data: subCategory,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(req, context) {
  const CategoryId = context.params.categoryId;

  await dbConnect();

  try {
    const category = await Category.findById(CategoryId);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: 'Category not found',
        },
        {
          status: 404,
        }
      );
    }

    const subCategories = await SubCategory.find({ parent: CategoryId });

    return NextResponse.json({
      success: true,
      data: {
        category,
        subCategories,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

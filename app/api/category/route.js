import { NextResponse } from 'next/server';
import Category from '@/models/Category';
import { SubCategory } from '@/models/Category';
import dbConnect from '@/utils/mongoose';

export async function POST(req) {
  const { name, description, icon } = await req.json();

  if (!name || !description || !icon) {
    return NextResponse.json(
      {
        success: false,
        error: 'Please provide all required fields',
      },
      {
        status: 400,
      }
    );
  }

  await dbConnect();

  try {
    const category = await Category.create({
      name,
      description,
      icon,
    });

    return NextResponse.json({
      success: true,
      data: category,
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

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find();

    const subCategories = await SubCategory.find();

    const data = categories.map((category) => {
      const subCategory = subCategories.filter(
        (subCategory) =>
          subCategory.parent.toString() === category._id.toString()
      );

      return {
        ...category._doc,
        subCategory,
      };
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.error(error);
  }
}

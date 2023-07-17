import dbConnect from '@/utils/mongoose';
import { hash } from 'bcryptjs';

import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please fill all fields',
      },
      {
        status: 400,
      }
    );
  }

  await dbConnect();

  const userExist = await User.findOne({ email });

  if (userExist) {
    return NextResponse.json(
      {
        success: false,
        message: 'User already exists',
      },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await hash(password, 12);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid user data',
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: 'User created successfully',
    },
    {
      status: 201,
      message: 'User created successfully',
    }
  );
}

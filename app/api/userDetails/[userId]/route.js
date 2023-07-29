import { NextResponse } from 'next/server';

import User from '@/models/User';
import UserDetails from '@/models/UserDetails';

import dbConnect from '@/utils/mongoose';

export async function POST(req, context) {
  const body = await req.json();

  const { userId: uid } = context.params;

  if (!uid) {
    return NextResponse.json(
      {
        success: false,
        error: 'User Id is required',
      },
      {
        status: 400,
      }
    );
  }

  await dbConnect();

  try {
    const uderDetailsExists = await UserDetails.findOne({ userId: uid });

    if (uderDetailsExists) {
      return NextResponse.json(
        {
          success: false,
          error: 'User details already exists',
        },
        {
          status: 400,
        }
      );
    }

    const userDetails = await UserDetails.create({
      ...body,
      userId: uid,
    });

    return NextResponse.json({
      success: true,
      data: userDetails,
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

export async function PUT(req, context) {
  const body = await req.json();

  const { userId: uid } = context.params;

  if (body.userId) {
    return NextResponse.json(
      {
        success: false,
        error: 'User Id cannot be updated',
      },
      {
        status: 400,
      }
    );
  }

  if (!uid) {
    return NextResponse.json(
      {
        success: false,
        error: 'User Id is required',
      },
      {
        status: 400,
      }
    );
  }

  await dbConnect();

  try {
    const userDetails = await UserDetails.findOne({ userId: uid });

    if (!userDetails) {
      return NextResponse.json(
        {
          success: false,
          error: 'User details not found',
        },
        {
          status: 404,
        }
      );
    }

    const updatedUserDetails = await UserDetails.findOneAndUpdate(
      { userId: uid },
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    return NextResponse.json({
      success: true,
      data: updatedUserDetails,
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
  const { userId } = context.params;

  await dbConnect();

  try {
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: 'User not found',
        },
        {
          status: 404,
        }
      );
    }

    const userDetails = await UserDetails.findOne({ userId });

    if (!userDetails) {
      return NextResponse.json(
        {
          success: false,
          error: 'User details not found',
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...userDetails._doc,
        email: user.email,
        name: user.name,
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

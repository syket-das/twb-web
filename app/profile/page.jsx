'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const { userDetails } = useSelector((state) => state.user);

  return <div>page</div>;
};

export default page;

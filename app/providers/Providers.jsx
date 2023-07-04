'use client';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
export default function Providers({ children }) {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  );
}

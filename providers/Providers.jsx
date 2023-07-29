'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
export default function Providers({ children }) {
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>
      </Provider>
    </>
  );
}

'use client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebase_app } from '@/config/firebase';
import { useEffect } from 'react';
import { logOut, setUser } from '@/redux/features/auth/authSlice';
import { Toaster } from 'react-hot-toast';
import Loading from '@/components/Loading';
export default function Providers({ children }) {
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <Wrapper>{children}</Wrapper>
      </Provider>
    </>
  );
}

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          })
        );
      } else {
        logOut();
      }
    });

    return () => unsubscribe();
  }, []);
  return <>{loading ? <Loading /> : children}</>;
};

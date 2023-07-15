// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOSwLr7vbTshMmiPAAcO3_RAMDm09rVf4',
  authDomain: 'twb-web.firebaseapp.com',
  projectId: 'twb-web',
  storageBucket: 'twb-web.appspot.com',
  messagingSenderId: '532421100846',
  appId: '1:532421100846:web:eda42f6a849c91ec9aa6bf',
  measurementId: 'G-RRN3EHVG06',
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// --------------
const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export { firebase_app, auth, db,  };

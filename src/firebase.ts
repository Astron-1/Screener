// import firebase from 'firebase/compat/app';

import { getAuth } from 'firebase/auth';

// // import { getAnalytics } from 'firebase/analytics';
// // we can use it later if we need to collect analytics report


const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
   };
   
// const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // export const analytics = getAnalytics(app);

// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const  auth = getAuth(app);
export default auth; 

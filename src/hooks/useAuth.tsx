import { useEffect, useState } from 'react';
import  auth  from '../firebase'; // Import your Firebase authentication module
import { onAuthStateChanged } from 'firebase/auth';

const USER_NAME_KEY = 'userName';

export const useAuth = () => {
  const [user, setUser] = useState(undefined); // Set the initial user state to undefined

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem(USER_NAME_KEY, authUser.displayName);
      } else {
        setUser(null);
        localStorage.removeItem(USER_NAME_KEY);
      }
    });

    // Restore session from local storage
    const userName = localStorage.getItem(USER_NAME_KEY);
    if (userName) {
      setUser({ displayName: userName });
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return { user };
};

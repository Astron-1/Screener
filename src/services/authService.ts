import auth from '../firebase'; // Import your Firebase authentication module
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCustomToken } from 'firebase/auth';

const USER_NAME_KEY = 'userName';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
//     console.log(user);
    localStorage.setItem(USER_NAME_KEY, user.displayName); 
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (email: string, password: string, displayName: string) => {
     try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const { user } = userCredential;
       localStorage.setItem(USER_NAME_KEY, displayName); // Store display name in local storage
       return user;
     } catch (error) {
       throw error;
     }
   };
   

// export const restoreSession = (): void => {
//   const accessToken = localStorage.getItem(USER_TOKEN_KEY);
//   if (accessToken) {
//     // Restore the session using the stored access token
//     signInWithCustomToken(auth, accessToken)
//       .then(() => {
//         // Session restored successfully
//         console.log('Session restored successfully');
//       })
//       .catch((error) => {
//         // Handle errors
//         console.error('Error restoring session:', error);
//       });
//   }
// };

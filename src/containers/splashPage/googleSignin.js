import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../configs/firebase';

export default async function () {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {}
}

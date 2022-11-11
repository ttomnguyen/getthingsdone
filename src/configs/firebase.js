import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3UOXR3ytkiBKn2vR-2-4znVo-HHqpQl8',
  authDomain: 'domo-taskapp-dev.firebaseapp.com',
  projectId: 'domo-taskapp-dev',
  storageBucket: 'domo-taskapp-dev.appspot.com',
  messagingSenderId: '755186710888',
  appId: '1:755186710888:web:ec8c04f60d0b0ed39fbedd',
  measurementId: 'G-ZVZYK7FE34',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

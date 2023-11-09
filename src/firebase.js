import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaO150K7VW-2mN51P98bZz9lEROJGqMO4",
    authDomain: "linkedin-clone-49bd7.firebaseapp.com",
    projectId: "linkedin-clone-49bd7",
    storageBucket: "linkedin-clone-49bd7.appspot.com",
    messagingSenderId: "380492286936",
    appId: "1:380492286936:web:dc66c24179833e6f6500ad"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export { db, auth, firebaseApp };
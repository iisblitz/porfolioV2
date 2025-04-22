// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBvMG8Ne9hMURKaO6VZnfORy1Mz05VkBs",
    authDomain: "davidgonzalez-1e347.firebaseapp.com",
    projectId: "davidgonzalez-1e347",
    storageBucket: "davidgonzalez-1e347.firebasestorage.app",
    messagingSenderId: "386061872411",
    appId: "1:386061872411:web:981e9b239689d7f47237be"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };

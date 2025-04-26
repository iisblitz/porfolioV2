import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "dotenv/config";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY1,
  authDomain: process.env.NEXT_PUBLIC_ADOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROID,
  storageBucket: process.env.NEXT_PUBLIC_SBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSSENDID,
  appId: process.env.NEXT_PUBLIC_APPID1,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };

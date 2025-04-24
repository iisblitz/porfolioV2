import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "dotenv/config";

const firebaseConfig = {
  apiKey: APIKEY1,
  authDomain: ADOMAIN,
  projectId: PROID,
  storageBucket: SBUCKET,
  messagingSenderId: MESSSENDID,
  appId: APPID1,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };

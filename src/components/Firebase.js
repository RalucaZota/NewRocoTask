import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-IRn2wSZH3lPNgibK_PrhPSU8TFEHmyU",
  authDomain: "uploaddocs-63f26.firebaseapp.com",
  projectId: "uploaddocs-63f26",
  storageBucket: "uploaddocs-63f26.appspot.com",
  messagingSenderId: "501353376826",
  appId: "1:501353376826:web:b77bb7ddeb3dc9dc4f9903",
};

// Firebase storage reference

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

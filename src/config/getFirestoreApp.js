import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSwy8HdZ_2m6XW_qoeZL2hCGuZDb2lGnU",
  authDomain: "delfinodulce-627fd.firebaseapp.com",
  projectId: "delfinodulce-627fd",
  storageBucket: "delfinodulce-627fd.appspot.com",
  messagingSenderId: "576752408120",
  appId: "1:576752408120:web:ee8da1de7170d0da4ff8cd"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}


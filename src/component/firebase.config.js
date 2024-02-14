// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEWNAchPobcgeKH-IsOuSDqHObvgLLaOs",
  authDomain: "verify-70693.firebaseapp.com",
  projectId: "verify-70693",
  storageBucket: "verify-70693.appspot.com",
  messagingSenderId: "184346348003",
  appId: "1:184346348003:web:518bc9161e20b42f6d78d6",
  measurementId: "G-74NK7KHFZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);












// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD6Lyo0Cy9A6YXrzoDpwGCiK8NpaqVahYQ",
//   authDomain: "twiotp.firebaseapp.com",
//   projectId: "twiotp",
//   storageBucket: "twiotp.appspot.com",
//   messagingSenderId: "1074066411140",
//   appId: "1:1074066411140:web:d49697cb3a625116293cd1",
//   measurementId: "G-5DQ7YTHP8Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
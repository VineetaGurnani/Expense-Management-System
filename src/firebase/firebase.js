import * as firebase from "firebase";

// const config = {
//     apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//     authDomain: "expense-manager-react.firebaseapp.com",
//     databaseURL: "https://expense-manager-react.firebaseio.com",
//     projectId: "expense-manager-react",
//     storageBucket: "expense-manager-react.appspot.com",
//     messagingSenderId: "847044394910"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyC1eiY5-F5BW-PIYsfM9C3xgmS3ShlWTN0",
    authDomain: "expense-manager-4a8ba.firebaseapp.com",
    databaseURL: "https://expense-manager-4a8ba-default-rtdb.firebaseio.com",
    projectId: "expense-manager-4a8ba",
    storageBucket: "expense-manager-4a8ba.appspot.com",
    messagingSenderId: "222778456873",
    appId: "1:222778456873:web:0b9199152d3b762a3f1538",
    measurementId: "G-7KKZF7EMZH"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };

//@refresh state
import * as firebase from 'firebase';
import '@firebase/auth';
import 'firebase/firestore';
 var firebaseConfig = {
    apiKey: "AIzaSyD_x0nLG1jm9qSTvtZFsI5Uhtzm4oxgSdE",
    authDomain: "daty-41173.firebaseapp.com",
    databaseURL: "https://daty-41173.firebaseio.com",
    projectId: "daty-41173",
    storageBucket: "daty-41173.appspot.com",
    messagingSenderId: "152664346817",
    appId: "1:152664346817:web:0202f42cb14bb82b0a0440",
    measurementId: "G-L6MY7YPDR9"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDEp9ODgMjn1alozCMzEP9ICkA6jx2xxrk",
    authDomain: "todo-test-6b146.firebaseapp.com",
    databaseURL: "https://todo-test-6b146.firebaseio.com",
    projectId: "todo-test-6b146",
    storageBucket: "todo-test-6b146.appspot.com",
    messagingSenderId: "1013069131799",
    appId: "1:1013069131799:web:b9c3f8a359b0e7fcab6c52",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();




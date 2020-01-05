import firebase from 'firebase';

const prodConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};

const devConfig = {
    apiKey: "AIzaSyDq2Zuy6n4zGRiwhGgh4LsoM1BZE0cSSKo",
    authDomain: "tvf-sonata.firebaseapp.com",
    databaseURL: "https://tvf-sonata.firebaseio.com",
    projectId: "tvf-sonata",
    storageBucket: "tvf-sonata.appspot.com",
    messagingSenderId: "468677390196",
    appId: "1:468677390196:web:c9dd551c66c7430c76c621",
    measurementId: "G-FF9X9F5J9M"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
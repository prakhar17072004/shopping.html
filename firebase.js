const firebaseConfig = {
    apiKey: "AIzaSyDNpNvzXgKCgLBx-2TPywPNhufAnhjDYPA",
    authDomain: "shopping-web-dd2d0.firebaseapp.com",
    projectId: "shopping-web-dd2d0",
    storageBucket: "shopping-web-dd2d0.appspot.com",
    messagingSenderId: "166766910230",
    appId: "1:166766910230:web:82381c5ccf3c4680708e37",
    measurementId: "G-DSMJPJZ5BE"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

import {getApp,getApps,initializeApp} from 'firebase/app';
import{ getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA_HN7CBfEfGeriePVoeT-fkN7N9APwzdg",
    authDomain: "ecco-mers-food.firebaseapp.com",
    databaseURL: "https://ecco-mers-food-default-rtdb.firebaseio.com",
    projectId: "ecco-mers-food",
    storageBucket: "ecco-mers-food.appspot.com",
    messagingSenderId: "1066684602435",
    appId: "1:1066684602435:web:ab5a97a147cde966ed5cf6",
    measurementId: "G-9K1KJQSWZP"
  };

  const app=getApps.length > 0 ? getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage=getStorage(app);

  export{app, firestore, storage};
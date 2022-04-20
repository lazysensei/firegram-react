import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "booyakachax says the lazysensei",
    authDomain: "firegram-react-796ff.firebaseapp.com",
    projectId: "firegram-react-796ff",
    storageBucket: "firegram-react-796ff.appspot.com",
    messagingSenderId: "413238392673",
    appId: "1:413238392673:web:05b9ea6a31973323eb3720"
  };

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

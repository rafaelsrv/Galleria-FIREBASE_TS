import { initializeApp } from 'firebase/app'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey : "AIzaSyAGvur2O-PGsHy-n2gyQ0lNGAnc8ThWj2k",
  authDomain: "gallery-react-rsaraiva.firebaseapp.com",
  projectId: "gallery-react-rsaraiva",
  storageBucket: "gallery-react-rsaraiva.appspot.com",
  messagingSenderId: "515013476756",
  appId: "1:515013476756:web:e038d0b81d2f6092210f81"
};

const firebaseAPP = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseAPP);

console.log(initializeApp)
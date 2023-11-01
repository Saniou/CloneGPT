import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDXo2mox87WS0zunqNzKvJ8niby8Ros32A",
  authDomain: "chatgpt-clone-app-968d2.firebaseapp.com",
  projectId: "chatgpt-clone-app-968d2",
  storageBucket: "chatgpt-clone-app-968d2.appspot.com",
  messagingSenderId: "419311259782",
  appId: "1:419311259782:web:48c0f0087b6e0932568107"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
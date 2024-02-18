import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
	apiKey: "AIzaSyCFwkE2WCysjZ8Lqj3vsSan0biGqptcXCQ",
	authDomain: "e-commerce-app-7abe5.firebaseapp.com",
	projectId: "e-commerce-app-7abe5",
	storageBucket: "e-commerce-app-7abe5.appspot.com",
	messagingSenderId: "882074007522",
	appId: "1:882074007522:web:98daf96879da2bfeecabbb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const adminEmail = 'm.torchia1@studenti.unipi.it';

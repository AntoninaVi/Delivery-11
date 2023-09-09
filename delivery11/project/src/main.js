import Vue from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, query, setDoc, collection, getDocs, addDoc, updateDoc } from  'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzu3bePwE18ZGi4J0veSLmldrZzpPmYhc",
  authDomain: "delivery-restaurant-535a0.firebaseapp.com",
  projectId: "delivery-restaurant-535a0",
  storageBucket: "delivery-restaurant-535a0.appspot.com",
  messagingSenderId: "989483012279",
  appId: "1:989483012279:web:ac6fa10790ed057975fd32"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const dishesRef = collection(db, 'dishes');

// Add data to Firebase
// addDoc(dishesRef, {
//  image: 'img/veg.png',
//   title: 'Pizza Vegetarian small',
//   size: '28 cm',
//   ingredients: 'Fresh tomatoes, Onions, Eggplants, Bell peppers, Zucchini, Mushrooms',
//   price: '95 UAH',
//   type: 'pizza'
// })
// .then((docRef) => {
//   console.log('Dish has been added', docRef.id);
// })
// .catch((error) => {
//   console.error('Error adding dish: ', error);
// });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

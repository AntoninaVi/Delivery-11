import Vue from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, query, setDoc, collection, getDocs, addDoc, updateDoc } from  'firebase/firestore';

// Import the functions you need from the SDKs you need



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
//   image: '/src/assets/img-dishes/dimare.png',
//   title: 'Greek veg',
//   size: '150 g',
//   ingredients: 'Dough, Mozzarella, Cheddar, Parmesan, Seafood',
//   price: '800 UAH',
//   type: 'salad'
// })
// .then((docRef) => {
//   console.log('Dish has been added', docRef.id);
// })
// .catch((error) => {
//   console.error('Error adding dish: ', error);
// });


// getting dishes from Firestore
// getDocs(dishesRef)
//   .then((querySnapshot) => {
//     const dishesContainer = document.getElementById('content__dishes-offers'); 
//     querySnapshot.forEach((doc) => {
//       const dishData = doc.data();
//       const dishElement = document.createElement('article');
//       dishElement.className = 'content__dishes-offers-dish';

//       const imgElement = document.createElement('img');
//       imgElement.src = dishData.image;
//       imgElement.alt = 'dish';
//       imgElement.className = 'dish__img';

//       const contentElement = document.createElement('div');
//       contentElement.className = 'dish__content';

//       const titleElement = document.createElement('h3');
//       titleElement.className = 'dish__content-title';
//       titleElement.textContent = dishData.title;

//       const sizeElement = document.createElement('p');
//       sizeElement.className = 'dish__content-size';
//       sizeElement.textContent = dishData.size;

//       const subscriptionElement = document.createElement('p');
//       subscriptionElement.className = 'dish__subscription';

//       const ingredientsElement = document.createElement('p');
//       ingredientsElement.className = 'dish__ingredients';
//       ingredientsElement.textContent = dishData.ingredients;

//       const priceElement = document.createElement('p');
//       priceElement.className = 'dish__price';
//       priceElement.textContent = dishData.price;

//       const buttonElement = document.createElement('button');
//       buttonElement.className = 'dish__button';
//       buttonElement.textContent = 'Order';

//       contentElement.appendChild(titleElement);
//       contentElement.appendChild(sizeElement);

//       subscriptionElement.appendChild(ingredientsElement);
//       subscriptionElement.appendChild(priceElement);

//       dishElement.appendChild(imgElement);
//       dishElement.appendChild(contentElement);
//       dishElement.appendChild(subscriptionElement);
//       dishElement.appendChild(buttonElement);

//       dishesContainer.appendChild(dishElement);
//     });
//   })
//   .catch((error) => {
//     console.error('Error getting dishes: ', error);
//   });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// import { writable, derived } from 'svelte/store';
// import axios from 'axios';

// function searchPlants(searchTerm) {
//   axios.get('https://trefle.io/api/v1/plants', {
//     params: {
//       q: searchTerm,
//       token: 'YOUR_API_KEY'
//     }
//   })
//   .then(response => {
//     const plants = response.data.data;
//     const resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = '';
//     plants.forEach(plant => {
//       const plantElement = document.createElement('div');
//       plantElement.innerHTML = `
//         <h3>${plant.common_name}</h3>
//         <p>${plant.scientific_name}</p>
//       `;
//       resultsContainer.appendChild(plantElement);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }

// // /** Store for your data. 
// // This assumes the data you're pulling back will be an array.
// // If it's going to be an object, default this to an empty object.
// // **/
// // export const apiData = writable([]);

// // /** Data transformation.
// // For our use case, we only care about the drink names, not the other information.
// // Here, we'll create a derived store to hold the drink names.
// // **/
// // export const drinkNames = derived(apiData, ($apiData) => {
// //   if ($apiData.CN){
// //     return $apiData.CN.map(drink => drink.strDrink);
// //   }
// //   return [];
// // });
// // import Card from 'react-bootstrap/Card';
// // import CardGroup from 'react-bootstrap/CardGroup';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Meals = () => {
//   const [foods, setFoods] = useState([]);
//   const [error, setError] = useState(null);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/food', {mode:'cors'});
//           console.log( JSON.stringify(response) );
//           setFoods( JSON.stringify(response) );
//       } catch (error) {
//         setError(error);
//       }
//     };
//     useEffect(() => {

//     fetchData();
//   }, []);


//   if (error) return <p>Error: {error}</p>;

//   return (

//     !foods ? error :
//         <>
//             <div>
//               <h1>Food List</h1>
//               <ul>
//                 {
//                     foods.map((food) => (
//                       <li key={food}>
//                         <h2>{food.name}</h2>
//                         <p>{food.description}</p>
//                         <p><strong>Country:</strong>{food.country}</p>
//                       </li>
//                     ))
//                 }
//               </ul>
//             </div>
//         </>

//   );

// };

// export default Meals;
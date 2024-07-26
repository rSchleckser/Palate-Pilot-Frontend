// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const Meals = () => {
//   const [foods, setFoods] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/food');
//         setFoods(response.data.foods);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Food List</h1>
//       <ul>
//         {foods.map((food) => (
//           <li key={food.id}>
//             <h2>{food.name}</h2>
//             <p>{food.description}</p>
//             <p>
//               <strong>Country:</strong> {food.country}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Meals;

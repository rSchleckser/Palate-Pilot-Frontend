<<<<<<< HEAD
// src/components/Card.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cards')
    .then(res => {
      setCard(res.data);
    })
    .catch(err => {
      console.log('error: ', err)
    })
  });

  return(
    <>

      {card.map(card => {
        return(
          <>
          <div key={card.id}>
            <h1>{card.country}</h1>
          </div>
          <div>
            <h3>{card.foods}</h3>
          </div>
          <div>
            <h3>{card.reviews}</h3>
          </div>
          </>
        )
      })}

    </>
  )

}

export default Cards;
=======
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cards = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/cards')
//       .then(res => {
//         setCards(res.data);
//       })
//       .catch(err => {
//         console.error('Error fetching cards:', err);
//       });
//   }, []);

//   return (
//     <div className="card-container">
//       {cards.map((card, index) => (
//         <div key={index} className="card">
//           <h2>{card.country}</h2>
//           <p>{card.facts}</p>
//           <div className="drop-card">
//             <h3>{card.dish.name}</h3>
//             <img src={card.dish.image} alt={card.dish.name} />
//             <p>{card.dish.description}</p>
//             <p>{card.dish.review}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;
>>>>>>> 78210cf761d810c7b7fcb6d43cb6f792899ca3b2

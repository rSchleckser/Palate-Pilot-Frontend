// src/components/DropCard.jsx
const DropCard = ({ dish }) => {
  return (
    <div className="drop-card">
      <h3>{dish.name}</h3>
      <img src={dish.image} alt={dish.name} />
      <p>{dish.description}</p>
      <p>{dish.review}</p>
    </div>
  );
};

export default DropCard;

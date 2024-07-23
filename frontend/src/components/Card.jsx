import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const PalatePilotCard = (props) => {
  return(
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Header>{props.country.name}</Card.Header>
          <Card.Text>Foods: {props.food.name}</Card.Text>
          <Card.Text>Reviews: {props.reviews.comment}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default PalatePilotCard;

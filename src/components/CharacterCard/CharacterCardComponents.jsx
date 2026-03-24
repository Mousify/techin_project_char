import './CharacterCardComponents.css';
import Card from 'react-bootstrap/Card';

function CharacterCardComponents({ props }) {
  return (
    <Card className="card h-100 character-card">
      <Card.Title className="card-title">{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <div className="mt-auto">
          <Card.Text className="card-text">Name: {props.name}</Card.Text>
          <Card.Text className="card-text">Age: {props.age}</Card.Text>
          <Card.Text className="card-text">Job: {props.job}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CharacterCardComponents;

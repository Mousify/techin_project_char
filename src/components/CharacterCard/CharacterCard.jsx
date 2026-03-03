import './CharacterCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CharacterCard({ prop, onEdit, onDelete }) {
  return (
    <Card className="card h-100 character-card">
      <Card.Title className="card-title">{prop.title}</Card.Title>
      <Card.Img variant="top" src={prop.image} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <div className="mt-auto">
          <Card.Text className="card-text">Name: {prop.name}</Card.Text>
          <Card.Text className="card-text">Age: {prop.age}</Card.Text>
          <Card.Text className="card-text">Job: {prop.job}</Card.Text>
        </div>
      </Card.Body>

      <div className="button-container">
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            className="flex-fill"
            onClick={() => onEdit(prop)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            className="flex-fill"
            onClick={() => onDelete(prop.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CharacterCard;

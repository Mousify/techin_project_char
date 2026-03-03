import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../data/characters.js';
import CharacterCard from '../CharacterCard/CharacterCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './CharacterList.css';

const CharacterList = () => {
  const [props, setProps] = useState(data);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [jobInput, setJobInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [editPropId, setEditPropId] = useState(null);

  function addProp() {
    if (!nameInput.trim()) return;
    const newProp = {
      id: uuidv4(),
      title: nameInput,
      name: nameInput,
      age: ageInput,
      job: jobInput,
      image: imageInput,
    };
    setProps((prev) => [...prev, newProp]);
    clearInputs();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editPropId) {
      updateProp();
    } else {
      addProp();
    }
  }

  function deleteProp(id) {
    setProps((prev) => prev.filter((prop) => prop.id !== id));
  }

  function startEdit(prop) {
    setNameInput(prop.name);
    setAgeInput(prop.age);
    setJobInput(prop.job);
    setImageInput(prop.image);
    setEditPropId(prop.id);
  }

  function updateProp() {
    setProps((prev) =>
      prev.map((prop) =>
        prop.id === editPropId
          ? {
              ...prop,
              title: nameInput,
              name: nameInput,
              age: ageInput,
              job: jobInput,
              image: imageInput,
            }
          : prop,
      ),
    );
    setEditPropId(null);
    clearInputs();
  }

  function clearInputs() {
    setNameInput('');
    setAgeInput('');
    setJobInput('');
    setImageInput('');
  }

  return (
    <div className="character-list-wrapper">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="character-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="form-input input-name"
            />
            <input
              type="text"
              placeholder="Age"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="form-input input-age"
            />
            <input
              type="text"
              placeholder="Job"
              value={jobInput}
              onChange={(e) => setJobInput(e.target.value)}
              className="form-input input-job"
            />
            <Button variant="primary" type="submit" className="form-btn">
              {editPropId ? 'Update' : 'Add'}
            </Button>
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Image URL"
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              className="form-input input-full"
            />
          </div>
        </form>
      </div>
      <div className="characters-list">
        <Container className="py-4">
          <Row className="g-4">
            {props.map((prop) => (
              <Col key={prop.id} xs={12} md={6} lg={4}>
                <CharacterCard
                  prop={prop}
                  onDelete={deleteProp}
                  onEdit={startEdit}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharacterList;

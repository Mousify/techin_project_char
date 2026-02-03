import { useState } from 'react';
import { data } from './data/characters.js';
import Header from './components/Header/Header';
import CharacterCard from './components/CharacterCard/CharacterCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const header = ['Character Catalog'];
  const [characters, setCharacters] = useState(data);

  return (
    <>
      <Header title={header} />
      <Container className="py-4">
        <Row className="g-4">
          {characters.map((props) => (
            <Col key={props.id} xs={12} md={6} lg={4}>
              <CharacterCard props={props} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

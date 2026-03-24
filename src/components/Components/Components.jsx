import CharacterCardOld from '../CharacterCard/CharacterCardOld.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Components() {
  const characters = [
    {
      name: 'Hero',
      age: 25,
      job: 'Warrior',
      image:
        'https://imgs.search.brave.com/u78WBnpJRjyuaDzET92qfDZJVyRzxKVrR-cOH4-hQgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVy/aWFnYW1lcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDIvR29sZGVuX0tu/aWdodF9jYXJkX3Jl/bmRlci53ZWJw',
    },
    {
      name: 'Mage',
      age: 70,
      job: 'Wizard',
      image:
        'https://imgs.search.brave.com/nXx6ETeJclYbw3GuG3TvtHX3c2joyRsogEzbxVwFctI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vla3BuZy5jb20v/cG5nL2RldGFpbC85/LTk4MTg5X3dpemFy/ZC1wbmcucG5n',
    },
    {
      name: 'Robot',
      age: 5,
      job: 'Helper Bot',
      image:
        'https://imgs.search.brave.com/_ME4JXXuirPd_ajHNR2HnghOANNgSg-pPcLyMgH93Qg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8xNy0x/Nzg0NDlfY2xhc2gt/cm95YWxlLXdhbGxw/YXBlci1taW5pLXBl/a2thLWhkLXBuZy1k/b3dubG9hZC5wbmc',
    },
    {
      name: 'Archer',
      age: 32,
      job: 'Ranger',
      image:
        'https://imgs.search.brave.com/Rnh-1bGI_qb-zLFQdkBhZaUc3RxL20l237UwR4QFZnQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS82NDAt/NjQwMzg3N19tYWdp/Yy1hcmNoZXItY2xh/c2gtcm95YWxlLWhk/LXBuZy1kb3dubG9h/ZC5wbmc',
    },
    {
      name: 'Healer',
      age: 28,
      job: 'Cleric',
      image:
        'https://imgs.search.brave.com/TqHpHOcQoLyza54OmtoklK4DZVb9hZeasfJEjIsIZXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8xNi0x/NjgzNDJfaGVhbGVy/LWZyb20tY2xhc2gt/b2YtY2xhbnMtaGQt/cG5nLWRvd25sb2Fk/LnBuZw',
    },
    {
      name: 'Soldier',
      age: 40,
      job: 'Fighter',
      image:
        'https://imgs.search.brave.com/yEfYy25_nCJcxEQBD4NgDCr-CVohm8c2qlkE6g6ciPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8wLTQ0/MzlfY2xhc2gtcm95/YWxlLW1lZ2Eta25p/Z2h0LWhkLXBuZy1k/b3dubG9hZC5wbmc',
    },
  ];

  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          {characters.map((character) => (
            <Col key={character.name} xs={12} md={6} lg={4}>
              <CharacterCardOld
                name={character.name}
                age={character.age}
                job={character.job}
                image={character.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Components;

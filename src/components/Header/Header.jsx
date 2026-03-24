import './Header.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="header1">{props.title}</h1>
      </header>

      <Nav variant="underline" defaultActiveKey="/Components">
        <Nav.Item>
          <Link to="/Components" className="nav-link">
            Components
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/useState" className="nav-link">
            useState
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/CRUD" className="nav-link">
            CRUD
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;

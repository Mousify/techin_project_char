import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const header = 'Character Catalog (CRUD)';

  return (
    <>
      <Header title={header} />
      <CharacterList />
    </>
  );
}

export default App;

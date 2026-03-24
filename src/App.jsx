import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import CharacterList from './components/CharacterList/CharacterList.jsx';
import Components from './components/Components/Components.jsx';
import UseStatePage from './components/useState/useStatePage.jsx';
import NotFound from './components/404/404.jsx';

function App() {
  const header = 'Character Catalog (CRUD)';

  return (
    <>
      <Header title={header} />
      <Routes>
        <Route path="/Components" element={<Components />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/CRUD" element={<CharacterList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

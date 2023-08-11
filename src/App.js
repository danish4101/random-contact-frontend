import Home from './screens/Home.jsx';
import './App.css';
import Nav from './components/Nav.jsx';
import Names from './screens/Names.jsx';
import { Routes, Route } from 'react-router-dom';
import Detail from './screens/Detail.jsx';
import Create from './screens/Create.jsx';
import Edit from './screens/Edit.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Names />} />
        <Route path="/add-contact" element={<Create />} />
        <Route path="/contacts/:id" element={<Detail />} />
        <Route path="/contacts/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

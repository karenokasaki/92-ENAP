import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {

  //path => o caminho da url -> SEM A URL BASE
  //element => qual é a pagina que deve ser renderizada nesse PATH.

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />

      </Routes>

    </div>
  );
}

export default App;

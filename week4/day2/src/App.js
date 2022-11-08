import "./App.css";
import ContadorDom from "./components/ContadorDom";
import ContadorUseState from "./components/ContadorUseState";
import MovieList from "./components/MovieList";

// useState -> hook -> uma função DO react

function App() {
  return (
    <div className="App">
      <h1>Hook useState!!</h1>

      <ContadorDom />
      <ContadorUseState />
      <MovieList  />
    </div>
  );
}

export default App;

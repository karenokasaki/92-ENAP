import "./App.css";
//importar o meu componente chamado Card
import Card from "./components/Card";

import IronLogo from "./images/ironhack-logo-xs.png";

function App() {
  /* AQUI EU ESCREVO JAVASCRIP NORMAL!! */

  function clickButton() {
    console.log("Esse botão foi clicado!!!");
  }

  const students = [
    { name: "Augusto Solfa", project: "Eggminer" },
    { name: "Annielli Rangel & Bruno", project: "Test TDAH" },
    { name: "Luiz e Tibério", project: "Discover Word" },
  ];

  return (
    /* DEPOIS DO RETURN, EU ESCREVO HTML!!! 
    JSX -> javascrip + html
    para escrever JS dentro do html a gente usa o {}
    */
    <div>
      <h1>Hello world.</h1>

      {/* Como passar uma props */}
      <Card name="Marcos Royer" project="Campo Minado" />
      <Card name="Michela" project="Genius" />
      <Card name="Anderson Moro & Gabriel" project="Bang" />
      <Card name="Ewerton" project="Iron Train" />

      {/* Como iterar por uma array!!!  */}
      {/* 
      {students.map((element) => {
        return <Card name={element.name} project={element.project} />;
      })} 
      */}

      <button onClick={clickButton} className="button">
        CLICK ME
      </button>

      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        alt="logo da ironhack sem fundo"
        className="background"
      />
    </div>
  );
}

export default App;

import { useState } from "react";

function ContadorUseState() {
  
  const [contador, setContador] = useState(0);
  // [variável, função que altera o valor da variável] = useState(valorInicial)
  const [palavra, setPalavra] = useState("ENAP");

  function add() {
    //para mudar o valor de uma variável é preciso usar a função setContador()
    setContador(contador + 1);
  }

  function sub() {
    setContador(contador - 1);
  }

  function addExc() {
    setPalavra(palavra + "!"); // -> ENAP!
  }

  return (
    <div>
      <h1>Contador useState!</h1>

      <button onClick={add}>+</button>
      <p>{contador}</p>
      <button onClick={sub}>-</button>

      <p>{palavra}</p>
      <button onClick={addExc}>Adicionar uma exclamação!</button>
    </div>
  );
}

export default ContadorUseState;

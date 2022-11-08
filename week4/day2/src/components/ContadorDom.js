function ContadorDom() {
  let contador = 0;

  function add() {
    contador++;
    console.log(contador);
  }

  function sub() {
    contador--;
    console.log(contador);
  }

  return (
    <div>
      <h1>Contador Dom!</h1>

      <button onClick={add}>+</button>
      <p>{contador}</p>
      <button onClick={sub}>-</button>
    </div>
  );
}

export default ContadorDom;

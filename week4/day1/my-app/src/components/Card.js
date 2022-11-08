//COMPONENTES SEMPRE COM LETRA MAÍUSCULA!!!
//1º fazer a função
//2º criar o seu return (html)
//3º exportar sua função

/* Como RECEBER uma props */
function Card(props) {
  console.log(props.name); // -> Marcos Royer

  return (
    <div>
      <h1>Meu nome é: {props.name}</h1>
      <h2>Meu projeto foi: {props.project}</h2>
    </div>
  );
}

export default Card;

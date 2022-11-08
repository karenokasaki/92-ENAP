import { useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      nome: "Pantera Negra 2",
      img: "https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-3.jpg",
      genero: "Aventura",
      temOscar: true,
    },
    {
      nome: "Marte Um",
      img: "https://br.web.img3.acsta.net/pictures/22/08/04/19/25/2946887.jpg",
      genero: "Drama",
      temOscar: false,
    },
    {
      nome: "Não! Não Olhe!",
      img: "https://portalestiloempauta.files.wordpress.com/2022/08/fm8tlj_xwaqmiej-e1661347968163.jpg?w=750",
      genero: "Suspense",
      temOscar: true,
    },
  ]);

  //PARA RENDERIZAR UMA ARRAY NO REACT USAMOS O MÉTODO MAP!!!
  // STYLE ESPERA RECEBER UM OBJETO!!

  //ternário:     condição-lógica ? se-for-true : se-for-false
  return (
    <div>
      <h1>Movie List</h1>

      {movies.map((movie) => {
        return (
          <section key={movie.nome}>
            <h2>{movie.nome}</h2>
            <p style={{ backgroundColor: "grey" }}>{movie.genero}</p>
            <img
              src={movie.img}
              alt="Poster do movie"
              style={{ width: "200px" }}
            />

            {/* TERNÁRIO */}
            {movie.temOscar ? <p>Tem oscar</p> : <p>Não tem oscar</p>}

            <button>DELETAR FILME</button>
          </section>
        );
      })}
    </div>
  );
}

export default MovieList;

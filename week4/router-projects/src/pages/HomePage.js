import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>ESTOU NA HOME!!!!</h1>
      <p>url: localhost:3000/</p>

      {/* Não utilizamos a tag <a></a> pois ela RECARREGA A PÁGINA!! */}
      <a href="/about">About Page</a>
      <p>
        <Link to="/about">About Page LINK</Link>
      </p>

    </div>
  );
}

export default HomePage;

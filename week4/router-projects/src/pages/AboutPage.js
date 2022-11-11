import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <div>
      <h1>Estou no ABOUT PAGE!!!</h1>

      <h1>
        Os projetos apresentados nesse site foram feitos pelos alunos da turma
        92 Web Dev Full Time / 2022
      </h1>

      <p>Parceria: ENAP</p>

      <Link to="/">Home page</Link>
    </div>
  );
}

export default AboutPage;

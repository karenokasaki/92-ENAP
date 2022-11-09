import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardPost({ post, posts, setPosts }) {
  function handleDelete(message) {
    let filteredPosts = posts.filter((post) => {
      return post.message !== message;
    });
    /* só o que vai ENTRAR pra array filtrada é TUDO OQUE FOR DIFERENTE DO BOTÃO QUE EU CLIQUEI */

    setPosts(filteredPosts);
  }

  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{post.about}</Card.Title>
        <Card.Subtitle>Nível de dificuldade: {post.difficulty}</Card.Subtitle>
        <Card.Text>{post.message}</Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={() => handleDelete(post.message)}>
        Deletar post
      </Button>
    </Card>
  );
}

export default CardPost;

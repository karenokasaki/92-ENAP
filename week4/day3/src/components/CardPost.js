import Card from "react-bootstrap/Card";

function CardPost({ post }) {
  console.log(post);

  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{post.about}</Card.Title>
        <Card.Subtitle>Nível de dificuldade: {post.difficulty}</Card.Subtitle>
        <Card.Text>{post.message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardPost;

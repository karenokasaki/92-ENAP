import { useState } from "react";
import CardPost from "./CardPost";

function Posts() {
  const [posts, setPosts] = useState([
    {
      about: "React",
      difficulty: "5",
      message: "Pelo menos é melhor que DOM.",
    },
    {
      about: "Props",
      difficulty: "3",
      message: "Eu sei usar mais ou menos...",
    },
    {
      about: "Método map()",
      difficulty: "1",
      message: "Já sei usar demais.",
    },
  ]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <CardPost post={post} key={post.about} />
        );
      })}
    </div>
  );
}

export default Posts;

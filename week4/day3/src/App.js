import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormInput from "./components/FormInput";
import Posts from "./components/Posts";
import { useState } from "react";

function App() {
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
    <div className="App">
      <FormInput posts={posts} setPosts={setPosts} />
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;

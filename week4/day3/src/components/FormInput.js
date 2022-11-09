import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function FormInput({ posts, setPosts }) {
  const [form, setForm] = useState({
    about: "",
    difficulty: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setPosts([...posts, form]);

    setForm({
      about: "",
      difficulty: "0",
      message: "",
    });
  }

  console.log(form);

  return (
    <div>
      <Form>
        <Form.Label>Tópico</Form.Label>
        <Form.Control value={form.about} name="about" onChange={handleChange} />

        <Form.Label>Mensagem</Form.Label>
        <Form.Control
          value={form.message}
          name="message"
          onChange={handleChange}
        />

        <Form.Label>Nível de Dificuldade</Form.Label>
        <Form.Select name="difficulty" onChange={handleChange}>
          <option value="0">Selecione uma opção</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>

        <Button variant="success" className="m-4" onClick={handleSubmit}>
          Salvar Post
        </Button>
      </Form>
    </div>
  );
}

export default FormInput;

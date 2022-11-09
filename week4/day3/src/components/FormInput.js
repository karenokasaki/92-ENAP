import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function FormInput() {
  const [form, setForm] = useState({
    about: "react",
    difficulty: "",
    message: "",
  });

  function handleChange(e) {
    /* console.log(e.target); // -> o input que eu estou escrevendo
    console.log(e.target.name); // -> o nome do input 
    console.log(e.target.value); // -> o valor do input */

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {}

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

import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("https://ironrest.cyclic.app/enap92");

        const response2 = await axios.get(
          "http://localhost:8080/products/all-product"
        );
        setProducts(response2.data);
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, [reload]);

  async function handleDelete(id) {
    try {
      await axios.delete(`https://ironrest.cyclic.app/enap92/${id}`);
      setReload(!reload);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(users);

  console.log(products);

  return (
    <div>
      {!isLoading && (
        <>
          {users.map((user) => {
            return (
              <div key={user._id}>
                <p>
                  {user.nome} - {user.cargo} - {user.departamento} -{" "}
                  <button onClick={() => handleDelete(user._id)}>
                    exonerar
                  </button>
                </p>
                <div>Tarefas:</div>
                {user.tasks.map((task) => {
                  return (
                    <p
                      key={task.task}
                      style={{
                        backgroundColor:
                          task.status === "concluido" ? "green" : "blue",
                      }}
                    >
                      {task.task} - {task.status}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default HomePage;

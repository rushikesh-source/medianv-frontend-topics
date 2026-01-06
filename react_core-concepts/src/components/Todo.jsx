import { useState } from "react";
import "../App.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or Update Todo
  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  // Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit Todo
  const handleEdit = (id) => {
    const selected = todos.find((todo) => todo.id === id);
    setInput(selected.text);
    setEditId(id);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo Manager</h2>

      <div className="todo-input-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>

            <div className="todo-actions">
              <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

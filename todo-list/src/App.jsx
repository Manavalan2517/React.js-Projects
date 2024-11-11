import { useState } from "react";
import "./index.css";
import { TodoComponent } from "./components/TodoContent";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[50vh] flex flex-col items-center justify-center">
        <div className="flex flex-row w-full justify-center items-center mb-5">
          <input
            type="text"
            placeholder="New Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full text-center py-2 rounded-xl border-2 border-gray-400"
          />
          <button
            onClick={addTodo}
            className="px-5 py-2 ml-5 transition-all ease-in-out duration-150 border-slate-700 border-2 border-solid rounded-xl hover:bg-green-500"
          >
            Submit
          </button>
        </div>
        <div className="w-full">
          <TodoComponent todos={todos} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;

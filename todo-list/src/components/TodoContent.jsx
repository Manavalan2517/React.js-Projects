export function TodoComponent({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border-2 border-red-800 mt-3 text-center content-center h-[50px] rounded-xl"
        >
          <p className="flex flex-row justify-between px-[15px]">
            {todo}
            <div>
              <button
                onClick={() => removeTodo(index)}
                className="h-full transition-all ease-in-out duration-150 border-2 border-red-500 px-2 rounded-lg hover:border-red-900 hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}
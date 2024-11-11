import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-row justify-center items-center mb-4">
        <button
          className="flex flex-row p-5 mr-7 transition-all ease-in-out duration-150 border-slate-700 border-2 border-solid rounded-xl hover:bg-green-500"
          onClick={decrement}
        >
          ➖
        </button>
        <span className="mr-7 text-4xl">{count}</span>
        <button
          className="p-5 transition-all ease-in-out duration-150 border-slate-700 border-2 border-solid rounded-xl hover:bg-green-500"
          onClick={increment}
        >
          ➕
        </button>
      </div>
      <div className="flex">
        <button
          className="px-[75px] py-3 text-xl transition-all ease-in-out duration-150 border-slate-700 border-2 border-solid rounded-xl hover:bg-green-500"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App

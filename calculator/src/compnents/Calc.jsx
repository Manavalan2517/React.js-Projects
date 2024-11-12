import { useState } from "react";

export const Calc = () => {
  const [inputvalue, setinputvalue] = useState("");

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    try {
      setinputvalue(eval(inputvalue).toString());
    } catch {
      setinputvalue("Error");
    }
  }

  function clear() {
    setinputvalue("");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="calculator grid grid-cols-4 gap-2 p-4 border-2 border-black bg-gray-800 rounded-lg"
        name="calc"
      >
        <input
          type="text"
          className="col-span-4 h-20 text-right border-none outline-none p-3 text-xl text-white bg-gray-700"
          value={inputvalue}
        />
        <button
          type="button"
          className="col-span-2 h-15 w-full text-center bg-orange-600 text-white rounded-lg p-3"
          onClick={() => clear()}
        >
          C
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("/")}
        >
          /
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("*")}
        >
          *
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("7")}
        >
          7
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("8")}
        >
          8
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("9")}
        >
          9
        </button>
        <button
          type="button"
          className="h-30 w-full text-center bg-orange-600 rounded-lg p-3 row-span-2"
          onClick={() => display("-")}
        >
          -
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("4")}
        >
          4
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("5")}
        >
          5
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("6")}
        >
          6
        </button>
        <button
          type="button"
          className="h-30 w-full text-center bg-orange-600 text-white rounded-lg p-3 row-span-2"
          onClick={() => display("+")}
        >
          +
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("1")}
        >
          1
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("2")}
        >
          2
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("3")}
        >
          3
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3 col-span-2"
          onClick={() => display("0")}
        >
          0
        </button>
        <button
          type="button"
          className="h-15 w-full text-center bg-gray-700 text-white rounded-lg p-3"
          onClick={() => display("00")}
        >
          00
        </button>
        <button
          type="button"
          className="h-15 text-center bg-orange-600 text-white rounded-lg p-3 col-span-4"
          onClick={() => calculate()}
        >
          =
        </button>
      </form>
    </div>
  );
};

export default Calc;

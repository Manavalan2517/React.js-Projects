import axios from "axios";
import { useEffect, useState } from "react";
import "../src/index.css";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      });
  }, [])

  console.log(items);

  return (
    <div>
      <h1>Seafoods</h1>
      <div className="m-10 flex gap-9 flex-wrap justify-around items-center">
        {items.map((item) => (
          <div key={item.idMeal} className="p-5 h-[300px] border-2 border-black rounded-xl bg-gray-200">
            <img src={item.strMealThumb} alt="meal" className="h-[200px] rounded-xl mb-2" />
            <div className="w-[200px] text-center font-bold">
              <h1>{item.strMeal}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
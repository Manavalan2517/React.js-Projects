import { useState } from "react";


export const Price = () => {

  const [selectedPrice, setSelectedPrice] = useState("");

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="mb-[25px]">
      <h2 className="text-[18px] font-normal mb-[20px]">Price</h2>
      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value="All"
          name="price"
          checked={selectedPrice === "All"}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        All
      </label>

      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value="$0 - $50"
          name="price"
          checked={selectedPrice === "All"}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        $0 - $50
      </label>

      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value="$50 - $100"
          name="price"
          checked={selectedPrice === "All"}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        $50 - $100
      </label>

      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value="$100 - $150"
          name="price"
          checked={selectedPrice === "All"}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        $100 - $150
      </label>

      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value="Over $150"
          name="price"
          checked={selectedPrice === "All"}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        Over $150
      </label>
    </div>
  );
}

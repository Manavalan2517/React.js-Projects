import PropTypes from "prop-types";
export const Input = ({ value, handleChange, selectedCategory, title, name }) => {
  return (
    <div>
      <label className="relative pl-[35px] mb-[12px] cursor-pointer block select-none">
        <input
          type="radio"
          value={value}
          name={name}
          checked={selectedCategory === value}
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer peer"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-gray-200 rounded-full peer-checked:bg-[#2196f3] border-2 border-solid peer-checked:border-blue-600 border-x-4 border-y-4"></span>
        {title}
      </label>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};


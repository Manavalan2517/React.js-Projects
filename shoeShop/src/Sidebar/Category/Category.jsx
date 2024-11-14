import PropTypes from "prop-types";
import { Input } from "../../components/Input";

export const Category = ({ handleChange, selectedCategory }) => {
  return (
    <div className="mb-[30px]">
      <h2 className="text-[18px] font-normal mb-[20px]">Category</h2>
      <div className="mt-[20px]">
        <Input
          value=""
          title="All"
          name="category"
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Input
          value="Sneakers"
          title="Sneakers"
          name="category"
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Input
          value="Flats"
          title="Flats"
          name="category"
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Input
          value="Sandals"
          title="Sandals"
          name="category"
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Input
          value="Heels"
          title="Heels"
          name="category"
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

Category.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

import { Category } from "./Category/Category";
import { Price } from "./Price/Price";
import { Color } from "./Colors/Color";
import PropTypes from "prop-types";

export const Sidebar = ({ handleChange, selectedCategory }) => {
  return (
    <div>
      <section className="sidebar w-[13%] fixed h-[100%] border-r-[2px] border-solid border-[#e5e5e5] z-[3] flex flex-col ml-10">
        <div className="logo-container mb-[4rem]">
          <h1 className="mt-[1.3rem]">🛒</h1>
        </div>
        <Category
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Price
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
        <Color
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
      </section>
    </div>
  );
};

Sidebar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

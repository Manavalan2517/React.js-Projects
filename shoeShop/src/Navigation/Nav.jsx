import PropTypes from "prop-types";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export const Nav = ({ query, handleInputChange }) => {
  return (
    <nav className="flex border-b-2 border-solid border-[#f3f3f3] justify-around items-center p-[20px] ml-[2rem] z-[999]">
      <div className="nav-container">
        <input
          className="search-input py-[12px] px-[20px] bg-[#f7f6f6] outline-none mr-[20px] rounded-[5px] relative w-[20rem]"
          type="text"
          placeholder="Enter your search shoes."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container flex gap-10">
        <a href="#">
          <FiHeart className="nav-icons w-[1.5rem] h-[1.5rem]" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons w-[1.5rem] h-[1.5rem]" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons w-[1.5rem] h-[1.5rem] " />
        </a>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

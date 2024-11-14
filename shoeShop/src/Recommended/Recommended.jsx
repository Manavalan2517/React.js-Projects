import PropTypes from "prop-types";

export const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title ml-[20rem] my-[20px] text-[20px]">
        Recommended
      </h2>
      <div className="recommended-flex flex ml-[20rem]">
        <button
          className="btns py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-solid border-[#ccc] rounded-[5px] text-[#323232] cursor-pointer"
          value=""
          onClick={handleClick}
        >
          All Products
        </button>
        <button
          className="btns py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-solid border-[#ccc] rounded-[5px] text-[#323232] cursor-pointer"
          value="Nike"
          onClick={handleClick}
        >
          Nike
        </button>
        <button
          className="btns py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-solid border-[#ccc] rounded-[5px] text-[#323232] cursor-pointer"
          value="Adidas"
          onClick={handleClick}
        >
          Adidas
        </button>
        <button
          className="btns py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-solid border-[#ccc] rounded-[5px] text-[#323232] cursor-pointer"
          value="Puma"
          onClick={handleClick}
        >
          Puma
        </button>
        <button
          className="btns py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-solid border-[#ccc] rounded-[5px] text-[#323232] cursor-pointer"
          value="Vans"
          onClick={handleClick}
        >
          Vans
        </button>
      </div>
    </div>
  );
};

Recommended.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

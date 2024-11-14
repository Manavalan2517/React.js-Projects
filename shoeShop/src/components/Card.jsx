import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div>
      <section className="card m-[20px] border-[2px] border-solid border-[#ededed] p-[20px] cursor-pointer">
        <img src={img} alt={title} className="card-img w-[13rem] mb-[1rem]" />
        <div className="card-details">
          <h3 className="card-title mb-[1rem]">{title}</h3>
          <section className="card-reviews mb-[1rem] flex">
            {Array.from({ length: star }, (_, i) => (
              <AiFillStar key={i} className="rating-star text-[#d5ab55]" />
            ))}
            <span className="total-reviews font-[0.9rem] ml-[10px]">
              {reviews}
            </span>
          </section>
          <section className="card-price flex justify-between items-center">
            <div className="price">
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon text-[#535353]" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
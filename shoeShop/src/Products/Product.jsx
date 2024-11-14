import { Card } from "../components/Card";

export const Product = ({ result }) => {
  return (
    <div className="card-container flex flex-wrap ml-[20rem] mt-[2rem] z-[-1]">
      {result.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};


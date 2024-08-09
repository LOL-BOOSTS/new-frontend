import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Reviews = (props: any) => {
  const { className, score } = props;
  const Star = (index: number) =>
    score >= index + 1 ? (
      <FaStar key={index} className={`${className}`} />
    ) : score > index ? (
      <FaStarHalfAlt key={index} className={`${className}`} />
    ) : (
      <FaRegStar key={index} className={`${className}`} /> // Use FaRegStar for empty star
    );

  return (
    <div className="inline-flex justify-start items-center gap-1">
      {Array(5)
        .fill(1)
        .map((_: any, index: number) => Star(index))}
    </div>
  );
};

export default Reviews;

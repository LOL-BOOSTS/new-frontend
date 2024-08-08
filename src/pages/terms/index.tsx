import classNames from "../../consts/classNames";
import terms from "../../data/terms.json";
const Terms = () => {
  return (
    <div
      className={`${classNames.containerClass} max-w-[1024px] mt-6 lg:mt-10`}
    >
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Terms of Service
      </h1>
      <div className="mt-6 space-y-6">
        {terms.map((d: any, index: number) => (
          <div key={index}>
            <h2 className="text-2xl font-bold">
              {index + 1}. {d.title}
            </h2>
            <div
              className="mt-4 text-gray-300"
              dangerouslySetInnerHTML={{ __html: d.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Terms;

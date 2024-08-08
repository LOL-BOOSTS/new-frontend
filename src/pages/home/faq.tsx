import Accordion from "../../components/home/accordian";
import classNames from "../../consts/classNames";
const FAQ = (props: any) => {
  const { faqs } = props;
  return (
    <div className="mt-10 lg:mt-20">
      <div className={`${classNames.containerClass}`}>
        <div className="flex flex-col items-center lg:flex-row gap-4">
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <img src="/images/other/3.png" className="w-full" alt="FAQ" />
          </div>
          <div className="flex-grow w-full lg:w-auto">
            <h1 className="text-5xl font-bold">
              Frequently Asked{" "}
              <span className="text-indigo-600">Questions</span>
            </h1>
            <div className="mt-6">
              {Array.isArray(faqs) &&
                faqs?.map((d: any, index: number) => {
                  return (
                    <Accordion
                      key={index}
                      title={d.question}
                      description={d.answer}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;

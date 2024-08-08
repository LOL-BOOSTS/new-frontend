import classNames from "../../consts/classNames";

const AmazingSeller = () => {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          ></path>
        </svg>
      ),
      title: "Fast Trading Platform",
      description:
        "Experience the peace of mind that comes with our amazing platform—ensuring fast payments for every transaction completed.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          ></path>
        </svg>
      ),
      title: "Get Paid Securely",
      description:
        "As long as you deliver, you'll always get securely paid on time. Our platform effectively manages fraudulent claims and protects you from any buyer chargebacks.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          ></path>
        </svg>
      ),
      title: "Free Marketing Boost",
      description:
        "Benefit from our amazing community and marketing ads designed to attract the ideal customers directly to your products.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          ></path>
        </svg>
      ),
      title: "Amazing Seller Rewards",
      description:
        "Achieve high seller status and enjoy increased visibility on our platform, along with numerous additional benefits, by consistently delivering exceptional service and satisfaction.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
          ></path>
        </svg>
      ),
      title: "Advanced Shopping Interface",
      description:
        "Experience a superior, detail-rich browsing interface for all games, equipped with in-depth filters and strong search engine",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          ></path>
        </svg>
      ),
      title: "Fast Trading Platform",
      description:
        "Experience the peace of mind that comes with our amazing platform—ensuring fast payments for every transaction completed.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          ></path>
        </svg>
      ),
      title: "24/7 Support",
      description:
        "We are available at all hours of the day to help you with any questions you may have and issues.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          ></path>
        </svg>
      ),
      title: "Efficient Product Listing",
      description:
        "Our platform features a fast and efficient interface for adding products, enabling sellers to quickly list their items and start selling using our exceptional UI and tools.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-10 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          ></path>
        </svg>
      ),
      title: "Choose your own schedule",
      description:
        "Work when you want, where you want, and how you want. You have the freedom to choose your own schedule and work at your own pace.",
    },
  ];
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <h1 className="text-2xl">
        Why Sell on LOL BOOSTs? Grow your Business with Our Amazing Seller
        Benefits
      </h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((d: any, index: number) => (
          <div
            key={index}
            className={`p-3 rounded-xl shadow-lg shadow-indigo-950 space-y-4`}
          >
            {d.icon}
            <h1 className="text-2xl">{d.title}</h1>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingSeller;

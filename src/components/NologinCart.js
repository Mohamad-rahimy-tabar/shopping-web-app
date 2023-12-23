import { Link } from "react-router-dom";

const NologinCart = () => {
  return (
    <div className="flex lg:flex-row flex-col text-xs lg:text-base gap-2 justify-evenly items-center ">
      <span>You are not logged in. Please use the opposite link and log in</span>
      <Link
        to="/login"
        state={{ redirect: "/cartsummary" }}
        className="text-main-secondary bg-main-primary shadow-md hover:text-black transition-colors duration-500 pt-2 pb-2 w-full lg:w-1/4 flex items-center justify-center rounded-lg"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 lg:w-6 lg:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </span>
        <span className="lg:ml-2">Go to Login Page</span>
      </Link>
    </div>
  );
};

export default NologinCart;

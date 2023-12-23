import { Link } from "react-router-dom";
import nologin from "../asset/images/no-login.png";
const NoLoginUser = () => {
  return (
    <section className="w-ful h-ful flex flex-col items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="font-kavoon text-sm lg:text-lg">Welcome to our website profile page.</span>
        <span className="text-xs md:text-base">
          To access your profile information, please log in or register. By logging in to your
          account, you can view your account details, orders, and messages.
        </span>
      </div>
      <div className="w-full lg:w-2/5 xl:w-1/3 h-auto ">
        <img src={nologin} alt="no-data" className="w-full h-auto" />
      </div>
      <Link
        to="/login"
        state={{ redirect: "/profile" }}
        className="text-main-secondary bg-main-primary shadow-md hover:text-black transition-colors duration-500 pt-2 pb-2 lg:pt-4 lg:pb-4 w-full md:w-1/2 lg:w-1/4 flex items-center justify-center rounded-lg"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </span>
        <span className="text-xs lg:text-base ml-2">Go to Login Page</span>
      </Link>
    </section>
  );
};

export default NoLoginUser;

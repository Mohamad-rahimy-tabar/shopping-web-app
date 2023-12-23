import { Link } from "react-router-dom";
import nodata from "../asset/images/Empty.png";
const NoData = () => {
  return (
    <div className="w-full h-full flex flex-col landscape:min-h-[500px] gap-2 p-2 md:gap-6 items-center ">
      <div className="mt-2">
        <span className="font-kavoon text-sm md:text-xl lg:text-3xl">No item in cart!</span>
      </div>
      <div className="w-full flex-1 flex flex-col items-center ">
        <div className="w-full md:w-2/3 lg:w-1/3 h-auto ">
          <img src={nodata} alt="no-data" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 flex flex-col xl:flex-row gap-4 items-center justify-center">
          <span className="lg:text-lg">Please go to the products page and add an item to the shopping cart, then come back!</span>
          <Link to="/products" className="w-full text-main-secondary bg-main-primary shadow-md text-sm lg:text-base hover:text-black transition-colors duration-500 pt-2 pb-2 md:w-1/2 flex items-center justify-center rounded-lg">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <span className="ml-2">Go to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoData;

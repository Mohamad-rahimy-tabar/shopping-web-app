import welcome from "../asset/images/welcome3.png";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center w-full h-full gap-2">
      <section className="w-full lg:w-4/5 lg:h-40 p-2 flex items-center justify-center border-b-2 border-main-primary">
        <div className="">
          <h1 className="font-kavoon text-xs lg:text-3xl">Welcome to M&M Online Store</h1>
        </div>
      </section>
      <section className="w-full md:w-2/3 gap-4 lg:w-4/5 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full h-full">
            <div className="aspect-w-1 aspect-h-1">
              <img className="object-cover" src={welcome} alt="welcome"></img>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-sm lg:text-lg">M & M Shopping</h2>
          <h3 className="text-xs lg:text-base mb-4">design & developed by M.R.T</h3>
          <Link to="home" className="text-main-secondary bg-main-primary shadow-md text-sm lg:text-base pt-2 pb-2 w-full lg:w-1/2 flex items-center justify-center rounded-lg">
            <span>Get Started</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;

import { useNavigate } from "react-router-dom";
import { useCategoryAction } from "../Context/Providers/CategoryProvider";
import home from "../asset/images/Home.png";
const HomePage = () => {
  const setCategory = useCategoryAction();
  const navigate = useNavigate();
  const categoryHandler = (e) => {
    setCategory(e.currentTarget.innerHTML);
    navigate("/products");
  };

  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="hidden lg:flex w-full items-center justify-center mb-4">
          <h1 className="font-kavoon text-lg">Categories</h1>
        </div>
        <div className="hidden lg:flex items-center justify-evenly text-xs md:text-base w-full text-main-primary mb-4">
          <span
            className="w-1/5 cursor-pointer text-center py-4 border border-main-primary rounded-md shadow-md"
            onClick={(e) => categoryHandler(e)}
          >
            jewelery
          </span>
          <span
            className="w-1/5 cursor-pointer text-center py-4 border border-main-primary rounded-md shadow-md"
            onClick={(e) => categoryHandler(e)}
          >
            men's clothing
          </span>
          <span
            className="w-1/5 cursor-pointer text-center py-4 border border-main-primary rounded-md shadow-md"
            onClick={(e) => categoryHandler(e)}
          >
            electronics
          </span>
          <span
            className="w-1/5 cursor-pointer text-center py-4 border border-main-primary rounded-md shadow-md"
            onClick={(e) => categoryHandler(e)}
          >
            women's clothing
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-kavoon text-xs md:text-base lg:text-lg mb-4 mt-6 md:mt-4 lg:mt-0 lg:mb-0">
            Hello, you are very welcome. You must have an account to use and buy from the site
          </span>
          <div className="flex flex-col gap-2 md:flex-row text-xs md:text-sm lg:text-base items-center w-full justify-evenly">
            <span className="">
              <a href="login" className="text-main-primary">
                Login
              </a>{" "}
              if you have an account
            </span>
            <span>
              otherwise{" "}
              <a href="signup" className="text-main-primary">
                create an account
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="h-[50%] md:h-2/3 flex justify-center">
        <img src={home} alt="home" className="h-full w-auto object-contain" />
      </div>
    </section>
  );
};

export default HomePage;

//product values [title, price, category, description, image];

import { useCart, useCartAction } from "../Context/Providers/CartProvider";
import { CheckInCart } from "../components/Utils/CheckInCart";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
//
const Product = ({ product }) => {
  const dispatch = useCartAction();
  const { cart } = useCart();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.title} added to cart`);
  };

  return (
    <section className="w-full h-full flex flex-col gap-1 lg:gap-2 items-center justify-between hover:shadow-xl transition-shadow duration-500  rounded-md shadow-md p-4">
      <div className="h-1/3 cursor-pointer w-full flex items-center justify-center">
        <img className="h-full w-auto" src={product.image} alt={product.title}></img>
      </div>
      <div className="text-xs w-full lg:text-sm line-clamp-1">{product.title}</div>
      <div className="flex flex-col gap-1 items-center w-full">
        <div className="flex w-full">
          <div className="flex items-center justify-center text-yellow-400">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
            <span className=" flex-1 ml-2 text-xs lg:text-sm xl:text-base">{product.rating.rate}</span>
          </div>
          <div className="flex-1 flex items-center justify-center text-yellow-400">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
            </span>
            <span className="text-xs lg:text-sm xl:text-base ml-2">{product.category}</span>
          </div>
        </div>
        {/*price*/}
        <div className="w-full flex items-center justify-center text-main-primary">
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="flex-1 text-xs lg:text-base ml-2">{product.price} $</span>
        </div>
      </div>
      {CheckInCart(cart, product) ? (
        <Link to="/cart" className="w-1/2 text-center text-xs lg:text-base text-main-base shadow-lg bg-main-primary rounded-md hover:text-black transition-colors duration-500 p-2">
          Go To Cart
        </Link>
      ) : (
        <button className="w-1/2 text-main-base text-xs lg:text-base shadow-lg bg-main-primary rounded-md hover:text-black transition-colors duration-500 p-2" onClick={() => addProductHandler(product)}>
          Add to cart
        </button>
      )}
    </section>
  );
};

export default Product;

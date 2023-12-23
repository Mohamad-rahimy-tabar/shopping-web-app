import { toast } from "react-hot-toast";
import { useCartAction } from "../Context/Providers/CartProvider";

const CartItems = ({ product }) => {
  const dispatch = useCartAction();
  const incrementHandler = (product) => {
    dispatch({ type: "INC_PRODUCT_CART", payload: product });
  };
  const decerementHandler = (product) => {
    if (product.quantity > 1) dispatch({ type: "DEC_PRODUCT_CART", payload: product });
  };
  const removeHandler = (product) => {
    dispatch({ type: "DEL_PRODUCT_CART", payload: product });
    toast.success(`${product.title} removed from the cart`);
  };

  return (
    <section className="w-full lg:h-28 text-xs lg:text-base border-2 border-main-primary flex flex-col lg:flex-row justify-between shadow-md rounded-md px-4 py-2 items-stretch">
      <div className="h-1/4 md:h-1/3 w-full lg:h-full lg:w-1/4 flex items-center justify-center rounded-md p-2 shadow-md">
        <img className="h-full w-auto max-w-[100px]" src={product.image} alt={product.title}></img>
      </div>
      <div className="w-full lg:w-2/3 flex items-center justify-center px-2">{product.title}</div>
      <div className="w-full lg:w-1/2 xl:w-1/4 flex items-center justify-center">
        total price: {product.price * product.quantity}
      </div>
      <div className="w-full flex justify-around">
        <div className="flex items-center justify-center">
          <span
            className={`${
              product.quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
            } border border-main-primary rounded-md shadow-md p-1 mr-2  text-main-primary`}
            onClick={() => decerementHandler(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 lg:w-5 lg:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </span>
          <span className="rounded-md w-4 h-4 lg:w-5 lg:h-5 p-1 flex items-center justify-center mr-2">
            {product.quantity}
          </span>
          <span
            className="border border-main-primary rounded-md shadow-md p-1 cursor-pointer text-main-primary"
            onClick={() => incrementHandler(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 lg:w-5 lg:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </div>
        <div className="flex items-center justify-center text-red-500">
          <div
            className="flex-col items-center justify-center border border-red-500 cursor-pointer rounded-md p-2 shadow-md"
            onClick={() => removeHandler(product)}
          >
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 lg:w-5 lg:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
            <span className="hidden lg:text-sm xl:text-base lg:block">Delete</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;

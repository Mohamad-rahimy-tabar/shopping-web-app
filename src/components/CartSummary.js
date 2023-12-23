import { useCart } from "../Context/Providers/CartProvider";
import { useLoginUser } from "../Context/Providers/LoginUserProvider";
import { totalPrice } from "./Utils/totalPrice";
import Cartsummaryitems from "./Cartsummaryitems";
import NologinCart from "./NologinCart";
import Userinfo from "./Userinfo";
const CartSummary = () => {
  const user = useLoginUser();
  const { cart } = useCart();
  const totalprice = totalPrice(cart);
  return (
    <section className="w-full h-full text-xs lg:text-base flex flex-col gap-4 items-center justify-start">
      <fieldset className="border-2 shadow-md flex flex-col gap-4 border-main-primary w-full p-4 rounded-md">
        <legend className="p-2 font-kavoon">User information</legend>
        {user ? <Userinfo /> : <NologinCart />}
      </fieldset>
      <fieldset className="w-full lg:h-[50%] flex lg:flex-row flex-col gap-4 items-center p-2 rounded-md">
        <legend className="p-2 font-kavoon">User Order Detail</legend>
        <div className="overflow-auto h-full min-h-[100px] w-full lg:w-[60%] shadow-md p-2 flex flex-col gap-2 items-center border-2 border-main-primary rounded-md">
          {cart.map((p) => (
            <Cartsummaryitems key={p.id} product={p} />
          ))}
        </div>
        <div className="w-full lg:flex-1 border-2 border-main-primary shadow-md p-4 gap-4 flex flex-col items-start justify-center rounded-md">
          <div className="w-full flex items-center justify-start font-bold">
            Number of goods : {cart.length}
          </div>
          <hr className="w-1/2 bg-main-primary h-1"></hr>
          <div className="w-full flex items-center justify-start font-bold">discount : 0</div>
          <hr className="w-1/2 bg-main-primary h-1"></hr>
          <div className="w-full flex items-center justify-start font-bold">
            Total Price : {totalprice} $
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="w-1/2 bg-main-primary hover:text-black transition-colors duration-500 text-main-secondary py-2 rounded-md ">
              Checkout
            </button>
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default CartSummary;

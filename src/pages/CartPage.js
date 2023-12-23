import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import NoData from "../components/NoData";
import { useCart } from "../Context/Providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();
  if (cart.length === 0) return <NoData />;
  return (
    <section className="w-full h-full py-2">
      <div className=" h-[90%] flex flex-col gap-2 overflow-auto">
        {cart.map((p) => (
          <CartItems key={p.id} product={p} />
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Link
          to="/cartsummary"
          className="mt-2 text-main-secondary text-xs md:text-base bg-main-primary shadow-md hover:text-black transition-colors duration-500 pt-2 lg:pt-4 pb-2 lg:pb-4 w-full md:w-1/2 flex items-center justify-center rounded-lg"
        >
          Continue the order
        </Link>
      </div>
    </section>
  );
};

export default CartPage;

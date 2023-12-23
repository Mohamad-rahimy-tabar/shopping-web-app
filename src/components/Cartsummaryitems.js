const Cartsummaryitems = ({ product }) => {
  return (
    <section className="w-full lg:h-28 shadow-md flex lg:flex-row flex-col gap-2 rounded-md px-4 py-2 items-stretch justify-center">
      <div className="w-full lg:w-1/10 flex lg:mr-2 items-center justify-center rounded-md px-2">
        <img className="w-10 h-auto" src={product.image} alt={product.title}></img>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-2">{product.title}</div>
      <div className="w-full lg:w-1/6 flex flex-col items-center justify-center">
        <div className=" flex items-center justify-center">Number : {product.quantity}</div>
        <div className=" flex items-center justify-center">Price : {product.price}</div>
      </div>
      <div className="w-full lg:w-1/4 flex items-center justify-center">
        Total Price : {product.quantity * product.price}
      </div>
    </section>
  );
};

export default Cartsummaryitems;

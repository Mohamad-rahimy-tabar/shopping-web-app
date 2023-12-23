import { useEffect } from "react";
import { getAllProducts } from "../services/allHttpServices";
import Loading from "../components/Loading";
import { useProductAction, useProducts } from "../Context/Providers/ProductProvider";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import Category from "../components/Category";
import { FilterProducts } from "../components/Utils/FilterProducts";
import { useCategoty } from "../Context/Providers/CategoryProvider";
const ProductPage = () => {
  const products = useProducts();
  const setProducts = useProductAction();
  const navigate = useNavigate();
  const params = useParams();
  const selected = useCategoty();
  useEffect(() => {
    const setPage = () => {
      if (!params.pagenumber) navigate("/products/1");
      if (!products) {
        getAllProducts()
          .then((res) => {
            setProducts(res.data);
          })
          .catch((eror) => {
            console.log(eror);
          });
      }
    };
    setPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products) return <Loading />;
  const { slicedProducts, pages } = FilterProducts(products, params, selected);

  return (
    <section className="w-full h-full flex flex-col gap-1 items-center justify-center[">
      <section className="w-full h-[10%]">
        <Category />
      </section>
      <section className=" w-full h-[85%] overflow-auto">
        <div className="gap-4 grid py-2 grid-cols-1 grid-rows-8 w-full h-[500%] max-h-[2000px] landscape:min-h-[2000px] sm:max-h-[1000px] md:grid-cols-2 md:grid-rows-4 md:h-[150%] md:landscape:min-h-[950px] md:landscape:max-h-[1300px] lg:grid-cols-3 lg:grid-rows-3 lg:landscape:min-h-[1000px] lg:landscape:max-h-[1400px] lg:h-full xl:grid-cols-4 xl:grid-rows-2 xl:landscape:min-h-full">
          {slicedProducts.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="w-full flex-1">
        <Pagination pages={pages} />
      </section>
    </section>
  );
};

export default ProductPage;

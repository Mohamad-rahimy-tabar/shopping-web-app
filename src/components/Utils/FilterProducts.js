import { productPagesCraator } from "./ProductPagesCraator";
//
//
export function FilterProducts(products, params, selected) {
  const updatedproducts =
    selected === "All" ? products : products.filter((p) => p.category === selected);
  const pages = productPagesCraator(updatedproducts);
  const currentPage = pages.find((p) => p.page === parseInt(params.pagenumber || 1));
  const slicedProducts = updatedproducts.slice(currentPage.sliceStart, currentPage.sliceEnd);
  return { pages, slicedProducts };
}

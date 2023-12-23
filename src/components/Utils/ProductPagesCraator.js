export function productPagesCraator(products) {
  const productLimit = 8;
  const numOfPages = Math.ceil(products.length / productLimit);
  const Pages = [];
  for (let i = 1; i <= numOfPages; i++) {
    Pages.push({
      page: i,
      to: `/products/${i}`,
      sliceStart: i * productLimit - productLimit,
      sliceEnd: productLimit * i,
    });
  }
  return Pages;
}

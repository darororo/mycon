// service/ProductService.js
export const ProductService = {
  getProductsMini() {
    return Promise.resolve([
      { id: 1, code: 'P001', name: 'Product A', inventoryStatus: 'INSTOCK', price: 100 },
      { id: 2, code: 'P002', name: 'Product B', inventoryStatus: 'LOWSTOCK', price: 150 },
    ])
  },
}

const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}
let products = [
  {
    id: 'potato',
    title: 'Картошка',
    price: 49.99,
    image: '/products/potato.jpg',
  },
  {
    id: 'carrot',
    title: 'Морковка',
    price: 55.00,
    image: '/products/carrot.jpg',
  },
  {
    id: 'cabbage',
    title: 'Капуста',
    price: 28.50,
    image: '/products/cabbage.jpg',
  },
];

const dataService = {
  getProductsList(...item) {
    if(item){
      products.push(...item);//добавлять неограниченное число новых товаров
    }
    return products;
  },
};

dataService.getProductsList({
  id: 'beef',
  title: 'Говядина',
  price: 69.99,
  image: '/products/beef.jpg',
})//добавил новый товар

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi;

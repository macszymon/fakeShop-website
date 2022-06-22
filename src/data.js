const data = [
  {
    id: 1,
    name: 'Basic T-shirt',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.3,
    reviews: 23,
    price: 17,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 2,
    name: 'Black pullover',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    rate: 4.6,
    reviews: 73,
    price: 30,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 3,
    name: 'Premium Coat',
    category: 'men',
    type: 'full-body',
    img: 'https://images.unsplash.com/photo-1622866651408-f373152f173b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.5,
    reviews: 13,
    price: 43,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 4,
    name: 'White T-Shirt',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.3,
    reviews: 56,
    price: 20,
    isFromNewCollection: true,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 5,
    name: 'Red Dress',
    category: 'women',
    type: 'full-body',
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80',
    rate: 4.7,
    reviews: 89,
    price: 74,
    isFromNewCollection: true,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 6,
    name: 'Premium Pullover',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1582377865071-6e622dc74d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.6,
    reviews: 94,
    price: 60,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: true,
  },
  {
    id: 7,
    name: 'Quality Sneakers',
    category: 'men',
    type: 'shoes',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
    rate: 4.9,
    reviews: 134,
    price: 55,
    isFromNewCollection: false,
    sizes: ['39', '40', '41', '42', '43'],
    fabric: ['leather', 'polyester', 'rubber'],
    isOnSale: true,
    discount: 0.6,
    isBestseller: true,
  },
  {
    id: 8,
    name: 'Air Shoes',
    category: 'women',
    type: 'shoes',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.2,
    reviews: 15,
    price: 89,
    isFromNewCollection: false,
    sizes: ['39', '40', '41', '42', '43'],
    fabric: ['leather', 'polyester', 'rubber'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 9,
    name: 'Premium Shoes',
    category: 'men',
    type: 'shoes',
    img: 'https://images.unsplash.com/photo-1571859856639-d54ab2c18ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    rate: 5,
    reviews: 1,
    price: 120,
    isFromNewCollection: false,
    sizes: ['39', '40', '41', '42', '43'],
    fabric: ['leather', 'polyester', 'rubber'],
    isOnSale: true,
    discount: 0.5,
    isBestseller: false,
  },
  {
    id: 10,
    name: 'High Heels',
    category: 'women',
    type: 'shoes',
    img: 'https://images.unsplash.com/photo-1590099033615-be195f8d575c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    rate: 3.9,
    reviews: 250,
    price: 43,
    isFromNewCollection: true,
    sizes: ['39', '40', '41', '42', '43'],
    fabric: ['leather', 'polyester', 'rubber'],
    isOnSale: false,
    discount: 0.8,
    isBestseller: false,
  },
  {
    id: 11,
    name: 'DIY Cap',
    category: 'men',
    type: 'accessories',
    img: 'https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    rate: 4.5,
    reviews: 25,
    price: 20,
    isFromNewCollection: true,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0.7,
    isBestseller: false,
  },
  {
    id: 12,
    name: 'Yellow Shorts',
    category: 'men',
    type: 'bottom',
    img: 'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    rate: 4.9,
    reviews: 13,
    price: 45,
    isFromNewCollection: true,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: false,
  },
  {
    id: 13,
    name: 'Light Dress',
    category: 'women',
    type: 'full-body',
    img: 'https://images.unsplash.com/photo-1574655563118-3e3eab32015d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.5,
    reviews: 67,
    price: 70,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: false,
    discount: 0,
    isBestseller: true,
  },
  {
    id: 14,
    name: 'Dark Suit',
    category: 'women',
    type: 'full-body',
    img: 'https://images.unsplash.com/photo-1654512697681-8434b50096dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    rate: 4.9,
    reviews: 3,
    price: 99,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: true,
    discount: 0.6,
    isBestseller: false,
  },
  {
    id: 15,
    name: 'Warm Pullover',
    category: 'women',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1644424235013-8865330d965f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.1,
    reviews: 331,
    price: 51,
    isFromNewCollection: false,
    sizes: ['S', 'M', 'L'],
    fabric: ['cotton', 'polyester'],
    isOnSale: true,
    discount: 0.6,
    isBestseller: true,
  },
];

export default data;

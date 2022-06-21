const data = [
  {
    id: 1,
    name: 'Basic T-shirt',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.3,
    reviews: 23 ,
    price: 17,
    isFromNewCollection: false
  },
  {
    id: 2,
    name: 'Black pulover',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    rate: 4.6,
    reviews: 73,
    price: 30,
    isFromNewCollection: false
  },
  {
    id: 3,
    name: 'Premium Coat',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1622866651408-f373152f173b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.5,
    reviews: 13,
    price: 43,
    isFromNewCollection: false
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
    isFromNewCollection: true
  },
  {
    id: 5,
    name: 'Red Dress',
    category: 'women',
    type: 'dress',
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80',
    rate: 4.7,
    reviews: 89,
    price: 74,
    isFromNewCollection: true
  },
  {
    id: 6,
    name: 'Premium Pulover',
    category: 'men',
    type: 'top',
    img: 'https://images.unsplash.com/photo-1582377865071-6e622dc74d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rate: 4.6,
    reviews: 94,
    price: 60,
    isFromNewCollection: false
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
    isFromNewCollection: false
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
    isFromNewCollection: false
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
    isFromNewCollection: false
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
    isFromNewCollection: true
  },
  {
    id: 10,
    name: 'DIY Cap',
    category: 'men',
    type: 'accessories',
    img: 'https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    rate: 4.5,
    reviews: 25,
    price: 20,
    isFromNewCollection: true
  },
  {
    id: 11,
    name: 'Yellow shorts',
    category: 'men',
    type: 'bottom',
    img: 'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    rate: 4.9,
    reviews: 13,
    price: 45,
    isFromNewCollection: true
  },
]

export default data;
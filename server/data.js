const bcrypt = require("bcryptjs")
const data = {
  users:[
    {
      name:"Aykhan",
      email:"admin@example.com",
      password:bcrypt.hashSync("1234",8),
      isAdmin:true
    },
    {
      name:"Axiles",
      email:"user@example.com",
      password:bcrypt.hashSync("1234",8),
      isAdmin:false
    }
  ],
    products: [
      {
  
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.png',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
    
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.png',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.png',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
    
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.png',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
    
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p5.png',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'T-shirt-6',
        category: 'Pants',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
     
        name: 'T-shirt-5',
        category: 'Pants',
        image: '/images/p7.png',
        price: 250,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
      
        name: 'T-shirt-4',
        category: 'Pants',
        image: '/images/p8.png',
        price: 330,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
     
        name: 'T-shirt-3',
        category: 'Pants',
        image: '/images/p9.png',
        price: 269,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
      
        name: 'T-shirt-2',
        category: 'Pants',
        image: '/images/p10.png',
        price: 249,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
     
        name: 'T-shirt-1',
        category: 'Pants',
        image: '/images/p11.png',
        price: 165,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
      
        name: 'T-shirt',
        category: 't-shirt',
        image: '/images/p12.png',
        price: 189,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  module.exports=data
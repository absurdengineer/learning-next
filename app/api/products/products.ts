export interface Product {
  id?: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Longos - Cheese Tortellini",
    price: 38.5,
  },
  {
    id: 2,
    name: "Wine - Magnotta - Pinot Gris Sr",
    price: 44.98,
  },
  {
    id: 3,
    name: "Contreau",
    price: 31.02,
  },
  {
    id: 4,
    name: "Veal - Liver",
    price: 31.81,
  },
  {
    id: 5,
    name: "Lamb - Rack",
    price: 88.21,
  },
  {
    id: 6,
    name: "Bread - Malt",
    price: 12.82,
  },
  {
    id: 7,
    name: "Wine - Cousino Macul Antiguas",
    price: 1.18,
  },
  {
    id: 8,
    name: "Soup - Cream Of Potato / Leek",
    price: 15.27,
  },
  {
    id: 9,
    name: "Cookies Cereal Nut",
    price: 36.54,
  },
  {
    id: 10,
    name: "Tomato Puree",
    price: 83.12,
  },
  {
    id: 11,
    name: "Longos - Burritos",
    price: 2.32,
  },
  {
    id: 12,
    name: "Cheese - Camembert",
    price: 60.41,
  },
  {
    id: 13,
    name: "Yeast - Fresh, Fleischman",
    price: 41.09,
  },
  {
    id: 14,
    name: "Oil - Sesame",
    price: 90.14,
  },
  {
    id: 15,
    name: "Island Oasis - Ice Cream Mix",
    price: 54.74,
  },
  {
    id: 16,
    name: "Bread - English Muffin",
    price: 29.03,
  },
  {
    id: 17,
    name: "Lamb - Pieces, Diced",
    price: 98.63,
  },
  {
    id: 18,
    name: "Coffee Beans - Chocolate",
    price: 1.44,
  },
  {
    id: 19,
    name: "Wine - Mas Chicet Rose, Vintage",
    price: 40.91,
  },
  {
    id: 20,
    name: "Bread - Pullman, Sliced",
    price: 98.17,
  },
  {
    id: 21,
    name: "Beef - Ox Tongue",
    price: 64.98,
  },
  {
    id: 22,
    name: "Tahini Paste",
    price: 18.35,
  },
  {
    id: 23,
    name: "Flour - Pastry",
    price: 32.85,
  },
  {
    id: 24,
    name: "Tea - Herbal Sweet Dreams",
    price: 23.71,
  },
  {
    id: 25,
    name: "Samosa - Veg",
    price: 27.02,
  },
  {
    id: 26,
    name: "Muffin - Mix - Strawberry Rhubarb",
    price: 8.28,
  },
  {
    id: 27,
    name: "Ice Cream - Super Sandwich",
    price: 97.31,
  },
  {
    id: 28,
    name: "Rum - Spiced, Captain Morgan",
    price: 28.02,
  },
  {
    id: 29,
    name: "Bread - Italian Roll With Herbs",
    price: 44.42,
  },
  {
    id: 30,
    name: "Pasta - Agnolotti - Butternut",
    price: 36.28,
  },
  {
    id: 31,
    name: "Pickle - Dill",
    price: 76.56,
  },
  {
    id: 32,
    name: "Goulash Seasoning",
    price: 87.74,
  },
  {
    id: 33,
    name: "Basil - Thai",
    price: 20.89,
  },
  {
    id: 34,
    name: "Water - Aquafina Vitamin",
    price: 42.13,
  },
  {
    id: 35,
    name: "Cream - 35%",
    price: 39.15,
  },
  {
    id: 36,
    name: "Food Colouring - Pink",
    price: 75.68,
  },
  {
    id: 37,
    name: "Cake - Bande Of Fruit",
    price: 5.33,
  },
  {
    id: 38,
    name: "Tumeric",
    price: 50.33,
  },
  {
    id: 39,
    name: "Coffee Cup 12oz 5342cd",
    price: 32.41,
  },
  {
    id: 40,
    name: "Oats Large Flake",
    price: 33.83,
  },
  {
    id: 41,
    name: "Nutmeg - Ground",
    price: 44.95,
  },
  {
    id: 42,
    name: "Quail - Whole, Bone - In",
    price: 58.02,
  },
  {
    id: 43,
    name: "Potatoes - Idaho 80 Count",
    price: 91.09,
  },
  {
    id: 44,
    name: "Wine - Sake",
    price: 8.07,
  },
  {
    id: 45,
    name: "Sugar Thermometer",
    price: 83.7,
  },
  {
    id: 46,
    name: "Nantucket - Orange Mango Cktl",
    price: 8.01,
  },
  {
    id: 47,
    name: "Juice - Tomato, 10 Oz",
    price: 88.56,
  },
  {
    id: 48,
    name: "Radish",
    price: 6.12,
  },
  {
    id: 49,
    name: "Veal - Tenderloin, Untrimmed",
    price: 38.24,
  },
  {
    id: 50,
    name: "Madeira",
    price: 68.73,
  },
];

let id = 50;

export const getNextProductId = () => (id += 1);

import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";
import product7 from "@/assets/images/product7.png";
import product8 from "@/assets/images/product8.png";
import product9 from "@/assets/images/product9.png";


export const sizes = ["S", "M", "L", "XL"];

export const colors = [
  "#ff6b6b",
  "#ffa94d",
  "#ffd43b",
  "#69db7c",
  "#4dabf7",
  "#845ef7",
  "#f06595",
  "#ced4da",
  "#22c55e",
  "#06b6d4",
  "#a78bfa",
  "#fb7185",
];

export const priceRanges = ["$0–$50", "$50–$100", "$100–$150", "$150–$200", "$300–$400"];

export const brands = ["Minimog", "Retrolie Brook", "Learts", "Vagabond", "Abby"];

export const collections = ["All products", "Best sellers", "New arrivals", "Accessories"];

export const tags = [
  "Fashion",
  "Hats",
  "Sandals",
  "Belt",
  "Bags",
  "Sneaker",
  "Denim",
  "Minimog",
  "Vagabond",
  "Sunglasses",
  "Beachwear",
];

export const sortOptions = [
  "Best selling",
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
];

export const products = [
  {
    id: 1,
    title: "Rounded Red Hat",
    price: "$8.00",
    image: product1,
    soldOut: false,
    variants: ["#f59f00", "#000000"],
  },
  {
    id: 2,
    title: "Linen-blend Shirt",
    price: "$17.00",
    image: product2,
    soldOut: true,
    variants: ["#adb5bd", "#ffc9c9"],
  },
  {
    id: 3,
    title: "Long-sleeve Coat",
    price: "$106.00",
    image: product3,
    soldOut: false,
    variants: ["#f1f3f5", "#c3fae8"],
  },
  {
    id: 4,
    title: "Boxy Denim Hat",
    price: "$25.00",
    image: product4,
    soldOut: false,
    variants: ["#cfe2ff", "#0b2e4a"],
  },
  {
    id: 5,
    title: "Linen Plain Top",
    price: "$25.00",
    image: product5,
    soldOut: false,
    variants: ["#b2f2bb", "#e9ecef"],
  },
  {
    id: 6,
    title: "Oversized T-shirt",
    price: "$11.00",
    oldPrice: "$14.00",
    image: product6,
    soldOut: false,
    variants: ["#ced4da", "#d0bfff", "#ffffff"],
  },
  {
    id: 7,
    title: "Polarised Sunglasses",
    price: "$18.00",
    oldPrice: "$21.00",
    image: product7,
    soldOut: false,
    variants: ["#000000", "#8b5e3c"],
  },
  {
    id: 8,
    title: "Rockstar Jacket",
    price: "$22.00",
    image: product8,
    soldOut: false,
    variants: ["#e9d5ff", "#cfe8ef"],
  },
  {
    id: 9,
    title: "Dotted Black Dress",
    price: "$20.00",
    image: product9,
    soldOut: false,
    variants: ["#0b2545", "#000000", "#b6d0e2"],
  },
];

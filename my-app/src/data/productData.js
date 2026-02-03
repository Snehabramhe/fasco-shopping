import product10 from "../assets/images/product10.png"
import product6 from "../assets/images/product6.png"
import product12 from "../assets/images/product12.png"
import product13 from "../assets/images/product13.png"
import product14 from "../assets/images/product14.png"
import product15 from "../assets/images/product15.png"
import product16 from "../assets/images/product16.png"
import CartImg from "../assets/images/cart-img.png"


export const PRODUCT = {
    brand: "FASCO",
    name: "Denim Jacket",
    rating: 4,
    reviewCount: 3,
      
    price: 39,
    compareAtPrice: 59,
    discountLabel: "SAVE 33%",
  
    viewersText: "24 people are viewing this right now",
  
    stockLeft: 9,
    stockTotal: 30,
  
    saleEndsInSeconds: 6 * 60 * 60 + 59 * 60 + 47,
  
    sizes: ["M", "L", "XL", "XXL"],
  
    colors: [
      { name: "Blue", value: "#87A9C6" },
      { name: "Black", value: "#111827" },
      { name: "Pink", value: "#F8C7D1" },
    ],
  
    estimatedDelivery: "Jul 30 - Aug 03",
    shippingText: "On all orders over $75",
  
    paymentBadges: CartImg,
  
    images: [
        product10,
        product6,
        product12,
        product13,
        product14,
        product15,
        product16
       ],
  };
  
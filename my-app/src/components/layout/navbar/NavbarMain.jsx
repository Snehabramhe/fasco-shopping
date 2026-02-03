import React, { useState } from "react";
import Container from "../Container";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import CartPageModal from "@/components/cart/CartPageModal";
import { useCart } from "@/components/cart/CartContext";



export default function NavbarMain() {
  const navigate = useNavigate();

  const [openCart, setOpenCart] = useState(false);
  const { cartItems, incQty, decQty, removeItem, wrap, setWrap } = useCart();

  return (
    <>
      <header className="py-6 border-b">
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="heading-3">FASCO</h1>
            </Link>

            <nav className="hidden md:flex gap-8 body-sm">
              <Link to="/">Home</Link>
              <Link to="/shop" className="border-b-2 border-black pb-1">
                Shop
              </Link>
              <Link to="/products">Products</Link>
              <Link to="/pages">Pages</Link>
            </nav>

            <div className="flex items-center gap-5">
              <Search className="h-5 w-5 cursor-pointer" />
              <User className="h-5 w-5 cursor-pointer" />
              <Heart className="h-5 w-5 cursor-pointer" />

            
              <button
                type="button"
                onClick={() => navigate("/cart")}
                aria-label="Open cart"
              >
                <ShoppingBag className="h-5 w-5" />
              </button>


            </div>
          </div>
        </Container>
      </header>


      {/* ✅ Cart modal */}
      <CartPageModal
        open={openCart}
        onClose={() => setOpenCart(false)}
        cartItems={cartItems}
        wrap={wrap}
        setWrap={setWrap}
        onInc={(id, color, size) => incQty(id, color, size)}
        onDec={(id, color, size) => decQty(id, color, size)}
        onRemove={(id, color, size) => removeItem(id, color, size)}
      />
    </>
  );
}

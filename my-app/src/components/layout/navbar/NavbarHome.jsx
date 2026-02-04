import Container from "../Container";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarHome() {
const navigate = useNavigate();

// const goToDeals = () => {
//   navigate("/");
//   setTimeout(() => {
//     document.getElementById("deals")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, 100);
// };

const scrollToSection = (id) => {
  navigate("/");

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

  return (
    <header id="navbar" className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="heading-3 cursor-pointer">FASCO</h1>
          </Link>

          <nav className="hidden md:flex gap-8 body-sm">
            <Link to="/" className="cursor-pointer">Home</Link>
            <button onClick={() => scrollToSection("deals")} className="cursor-pointer">Deals</button>
            <button onClick={() => scrollToSection("new-arrivals")} className="cursor-pointer">New Arrivals</button>
            <button onClick={() => scrollToSection("packages")} className="cursor-pointer">Packages</button>
            <Link to="/sign-in" className="cursor-pointer">Sign in</Link>
          </nav>

          <Button onClick={() => navigate("/sign-up")} className="cursor-pointer">Sign Up</Button>
        </div>
      </Container>
    </header>
  );
}

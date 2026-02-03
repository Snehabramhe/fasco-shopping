import Container from "../Container";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarHome() {
const navigate = useNavigate();

  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="heading-3">FASCO</h1>
          </Link>

          <nav className="hidden md:flex gap-8 body-sm">
            <Link to="/">Home</Link>
            <Link to="/deals">Deals</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/sign-in">Sign in</Link>
          </nav>

          <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
        </div>
      </Container>
    </header>
  );
}

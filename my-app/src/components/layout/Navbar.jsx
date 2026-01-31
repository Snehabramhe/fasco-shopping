import Container from "./Container";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="heading-3">FASCO</h1>

          <nav className="hidden md:flex gap-8 body-sm">
            <a href="#">Home</a>
            <a href="#">Deals</a>
            <a href="#">New Arrivals</a>
            <a href="#">Packages</a>
          </nav>

          <Button>Sign Up</Button>
        </div>
      </Container>
    </header>
  );
}

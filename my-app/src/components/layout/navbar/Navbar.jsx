import { useLocation } from "react-router-dom";
import NavbarHome from "./NavbarHome";
import NavbarMain from "./NavbarMain";

export default function Navbar() {
  const { pathname } = useLocation();

  // Home page only
  if (pathname === "/") {
    return <NavbarHome />;
  }

  // All other pages
  return <NavbarMain/>;
}

import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavbarTop />
      <NavbarMain />

      {/* MAIN CONTENT */}
      <main className="relative z-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;

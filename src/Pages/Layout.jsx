import { Outlet } from "react-router-dom";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Head />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;

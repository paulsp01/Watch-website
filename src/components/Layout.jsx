import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen w-full min-w-0 bg-[#161615]">
      <Header />

      <div className="w-full min-w-0">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
import { useAppContext } from "@/contexts/AppContext";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FullScreenNavbar from "@/components/Navbar/FullScreenNavbar";

function LandingLayout({ children }) {
  const { navbar: navbarContext } = useAppContext();

  return (
    <div className="h-screen">
      <FullScreenNavbar />

      <div className={`${navbarContext.isShowNavbar ? "hidden" : ""}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default LandingLayout;

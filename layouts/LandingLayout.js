import { useAppContext } from "@/contexts/AppContext";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Pattern from "@/components/Pattern";
import FullScreenNavbar from "@/components/Navbar/FullScreenNavbar";

function LandingLayout({ children }) {
  const { navbar: navbarContext } = useAppContext();

  return (
    <div className="min-h-screen">
      <FullScreenNavbar />

      <div className={`${navbarContext.isShowNavbar ? "hidden" : ""}`}>
        <Header />
        <Menu />
        <main>{children}</main>

        {/* <div className="mt-20px sm:visible md:invisible md:hidden">
        <Pattern />
      </div> */}
      </div>
    </div>
  );
}

export default LandingLayout;

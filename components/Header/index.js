import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/contexts/AppContext";

function Header() {
  const { navbar: navbarContext } = useAppContext();

  return (
    <>
      {/* Desktop Header */}
      <div className="min-h-150px w-full fixed z-10 invisible hidden md:visible md:block">
        <div className="flex flex-row justify-end mx-70px py-20px">
          <Link className="cursor-pointer" href={"/"}>
            <div className="block">
              <Image
                src={"/assets/svg/main-logo.svg"}
                alt="Logo"
                height={150}
                width={150}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="min-h-150px w-full z-20 visible block md:invisible md:hidden">
        <div className="flex flex-row justify-between mx-7 py-10px lg:py-30px">
          <Link className="cursor-pointer" href={"/"}>
            <div className="block -ml-4">
              <Image
                src={"/assets/svg/main-logo.svg"}
                alt="Logo"
                height={150}
                width={150}
              />
            </div>
          </Link>

          <div
            className="block cursor-pointer mt-20px "
            onClick={() => navbarContext.toggleShowNavbar()}
          >
            <Image
              className={`transition transform duration-300 ease-out ${
                navbarContext.isShowNavbar ? "hidden" : " "
              } `}
              src={"/assets/svg/plus-icon.svg"}
              width={35}
              height={35}
              alt="PlusIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

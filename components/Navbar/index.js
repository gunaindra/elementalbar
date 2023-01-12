import { useAppContext } from "@/contexts/AppContext";
import Image from "next/image";
import Link from "next/link";

function NavbarComponent() {
  const { navbar: navbarContext } = useAppContext();

  return (
    <>
      <div className="min-h-150px w-full">
        <div className="flex flex-row justify-between mx-7 py-10px lg:py-30px">
          <Link className="cursor-pointer" href={"/"}>
            <div className="block -ml-4 ">
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
              width={30}
              height={30}
              alt="PlusIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;

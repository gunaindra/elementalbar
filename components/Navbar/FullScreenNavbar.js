import { useAppContext } from "@/contexts/AppContext";
import Image from "next/image";
import Link from "next/link";

function FullScreenNavbar({ isShow }) {
  const { navbar: navbarContext } = useAppContext();

  return (
    <div
      className={`h-full  fixed w-full bg-brown transition-opacity duration-300 ease-out overflow-y-auto ${
        navbarContext.isShowNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-row justify-between mx-7 py-10px lg:py-30px">
        <Link className="cursor-pointer" href={"/"}>
          <div className="block -ml-4 ">
            <Image
              src={"/assets/logo/icon-logo.png"}
              alt="IconLogo"
              height={150}
              width={150}
            />
          </div>
        </Link>

        <div
          className="block cursor-pointer mt-20px"
          onClick={() => navbarContext.toggleShowNavbar()}
        >
          <Image
            className={`transition transform duration-300 ease-out ${
              navbarContext.isShowNavbar ? "rotate-0" : "rotate-45"
            } `}
            src={"/assets/svg/x-icon.svg"}
            width={35}
            height={35}
            alt="XIcon"
          />
        </div>
      </div>

      <div className="flex justify-center items-center bg-brown h-full">
        <Link
          className="cursor-pointer transition duration-500 ease-out transform hover:scale-110"
          href={"/booking"}
        >
          <h1 className="text-CTANavbar text-center text-grey -rotate-12">
            Booking <br /> Now
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default FullScreenNavbar;

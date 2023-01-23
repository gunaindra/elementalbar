import Link from "next/link";

function Menu() {
  return (
    <>
      <ul className="sticky top-[75vh] ml-70px z-30 invisible hidden md:visible md:block">
        <li className="text-menu hover:text-brown mb-2">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-menu hover:text-brown mb-2">
          <Link href={"/booking"}>Booking</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;

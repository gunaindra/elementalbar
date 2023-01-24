import Link from "next/link";

function Menu() {
  return (
    <>
      <ul className="sticky top-[75vh] ml-70px z-30 invisible hidden md:visible md:block">
        <li className="text-menu mb-2 hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-menu mb-2 hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4">
          <Link href={"/booking"}>Booking</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;

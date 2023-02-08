import Link from "next/link";

function Menu() {
  return (
    <div className="absolute">
      <ul className="fixed bottom-0 mb-10 ml-70px z-50 invisible hidden md:visible md:block">
        <li className="w-35 text-menu mb-2 ">
          <Link
            className="hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li className="w-35 text-menu mb-2 ">
          <Link
            className="hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4"
            href={"/story"}
          >
            Story
          </Link>
        </li>
        <li className="w-35 text-menu mb-2 ">
          <Link
            className="hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4"
            href={"/booking"}
          >
            Booking
          </Link>
        </li>
        <li className="w-35 text-menu mb-2 ">
          <Link
            className="hover:text-brown hover:underline hover:decoration-2 hover:underline-offset-4"
            href={"/feed"}
          >
            Latest Feed
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

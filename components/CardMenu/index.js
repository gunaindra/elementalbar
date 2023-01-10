import Image from "next/image";
import Link from "next/link";

function CardMenu({ image, href, hrefTitle }) {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <div className="w-full">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="Elementary Bar Menu"
          className="w-100 relative"
        />
      </div>

      <div className="py-5">
        <Link
          href={href}
          className="text-3xl underline underline-offset-4 text-black hover:text-black"
        >
          {hrefTitle}
        </Link>
      </div>
    </div>
  );
}

export default CardMenu;

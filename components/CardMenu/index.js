import Image from "next/image";
import Link from "next/link";

function CardMenu({ image, href, hrefTitle }) {
  return (
    <Link href={href} className="flex flex-col flex-wrap justify-center transition duration-500 ease-in-out transform hover:scale-105">
      <div className="block">
        <Image
          src={image}
          alt="Menu Home Page"
          height={1000}
          width={1000}
          priority
        />
      </div>

      <div className="pt-20px pb-30px">
        <h3 className="text-heading underline decoration-2 underline-offset-4 text-black ">
          {hrefTitle}
        </h3>
      </div>
    </Link>
  );
}

export default CardMenu;

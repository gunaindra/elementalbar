import CardMenu from "@/components/CardMenu";

function Menu() {
  return (
    <div className="grid lg:grid-cols-2 print:grid-cols-2 gap-5 mx-7 pb-90px">
      <CardMenu
        image="/assets/images/eb-web-story.webp"
        href={"/story"}
        hrefTitle="Story"
      />
      <CardMenu
        image="/assets/images/eb-web-booking.webp"
        href={"/booking"}
        hrefTitle="Book a seat"
      />
      <CardMenu
        image="/assets/images/eb-web-shop.webp"
        href={"/shop"}
        hrefTitle="Go to shop"
      />
      <CardMenu
        image="/assets/images/eb-web-events.webp"
        href={"/events"}
        hrefTitle="Events"
      />
    </div>
  );
}

export default Menu;

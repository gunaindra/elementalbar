import CardMenu from "@/components/CardMenu";

function Menu() {
  return (
    <div className="grid lg:grid-cols-2 print:grid-cols-2 gap-4 mx-2 py-20 horizontal-scroll">
      <CardMenu
        image="/assets/images/eb-web-story.jpg"
        href={"/story"}
        hrefTitle="Story"
      />
      <CardMenu
        image="/assets/images/eb-web-booking.jpg"
        href={"/booking"}
        hrefTitle="Book a seat"
      />
      <CardMenu
        image="/assets/images/eb-web-shop.jpg"
        href={"/shop"}
        hrefTitle="Go to shop"
      />
      <CardMenu
        image="/assets/images/eb-web-events.jpg"
        href={"/events"}
        hrefTitle="Events"
      />
    </div>
  );
}

export default Menu;

import { useState, createRef } from "react";

import { useRouter } from "next/router";

import { TransitionGroup } from "react-transition-group";
import StackCardItem from "./StackCardItem";

function StackCard() {
  const [listAssets, setListAssets] = useState(() => [
    {
      orders: 1,
      alt: "web-story",
      src: "/assets/images/eb-web-story.webp",
      href: "/story",
      title: "Story",
      nodeRef: createRef(null),
    },
    {
      orders: 2,
      alt: "web-booking",
      src: "/assets/images/eb-web-booking.webp",
      href: "/booking",
      title: "Booking",
      nodeRef: createRef(null),
    },
    {
      orders: 3,
      alt: "eb-web-shop",
      src: "/assets/images/eb-web-shop.webp",
      href: "/shop",
      title: "Shop",
      nodeRef: createRef(null),
    },
    {
      orders: 4,
      alt: "web-events",
      src: "/assets/images/eb-web-events.webp",
      href: "/events",
      title: "Events",
      nodeRef: createRef(null),
    },
  ]);

  return (
    <div>
      <TransitionGroup className="flex items-center justify-center h-screen relative">
        {listAssets
          .sort((a, b) => b.orders - a.orders)
          .map((asset, index) => {
            return <StackCardItem key={index} asset={asset} index={index} />;
          })}
      </TransitionGroup>
    </div>
  );
}

export default StackCard;

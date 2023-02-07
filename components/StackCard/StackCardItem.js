import { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";

import { useAppContext } from "@/contexts/AppContext";

import { useRouter } from "next/router";

function StackCardItem({ asset, index }) {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  const { card: cardContext } = useAppContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      appear
      unmountOnExit
      key={`stack-image-${asset.orders}`}
      nodeRef={asset.nodeRef}
      timeout={asset.orders === 1 ? 0 : (asset.orders - 1) * 1000}
      classNames={`stack-image stack-image-item-${asset.orders}`}
    >
      <img
        style={{
          zIndex: cardContext.activeCard?.orders == asset.orders ? 1001 : index,
        }}
        onMouseEnter={() => {
          cardContext.handleSetActiveCard({ ...asset, onHover: true });
        }}
        onMouseLeave={() => {
          cardContext.handleSetActiveCard({
            ...cardContext.activeCard,
            onHover: false,
          });
        }}
        onClick={() => {
          router.push(asset.href);
        }}
        ref={asset.nodeRef}
        className={`stack-image stack-image-${asset.orders}`}
        src={asset.src}
        alt={asset.alt}
      />
    </CSSTransition>
  );
}

export default StackCardItem;

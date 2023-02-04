import { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";

function StackCardItem({ asset, index }) {
  const [isMounted, setIsMounted] = useState(false);

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
        ref={asset.nodeRef}
        className={`stack-image stack-image-${asset.orders}`}
        src={asset.src}
        alt={asset.alt}
      />
    </CSSTransition>
  );
}

export default StackCardItem;

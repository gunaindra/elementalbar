function Pattern({ position = "bottom" }) {
  const positionClassName = () => {
    let className;

    switch (position) {
      case "top":
        className = "top-0 mt-0";
        break;
      case "bottom":
        className = "top-[100vh]";
        break;
      default:
        className = "top-[100vh]";
    }

    return className;
  };

  return (
    <div
      className={`bg-repeat h-50px sticky ${positionClassName()}`}
      style={{ backgroundImage: "url(/assets/pattern/pattern-1.svg)" }}
    />
  );
}

export default Pattern;

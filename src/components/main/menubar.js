import { useEffect } from "react";

export const Menubar = () => {
  const select = (e) => {
    let menuItems = document.querySelectorAll(".item");
    menuItems.forEach((item) =>
      item.classList.remove("font-bold", "text-primary")
    );
    e.target.classList.add("font-bold", "text-primary");
    let marker = document.querySelector("#marker");
    marker.style.left = e.target.offsetLeft + "px";
    marker.style.width = e.target.offsetWidth + "px";
  };

  useEffect(() => {
    const changeScroll = (e) => {
      e.preventDefault();
      menu.scrollLeft += e.deltaY / 20;
    };

    const menu = document.querySelector(".menuBar");
    menu.addEventListener("wheel", changeScroll);

    return () => {
      const menu = document.querySelector(".menuBar");
      menu.addEventListener("wheel", changeScroll);
    };
  });

  return (
    <>
      <div
        className="
        menuBar
        relative
        flex
        h-[40px]
        overflow-x-hidden

        "
      >
        <div
          className="
          absolute 
          left-0 
          bottom-0 
          h-1 
          bg-primary
          transition-all
          "
          id="marker"
        ></div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-1"
          onClick={(e) => select(e)}
        >
          Osana
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-2"
          onClick={(e) => select(e)}
        >
          Damo
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-4"
          onClick={(e) => select(e)}
        >
          Really Long Item
        </div>
        <div
          className="item relative m-2 whitespace-nowrap"
          id="item-5"
          onClick={(e) => select(e)}
        >
          sm
        </div>
      </div>
    </>
  );
};

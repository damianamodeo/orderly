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

  return (
    <>
      <div
        className="
        justify-left 
        relative 
        flex 
        content-center 
        overflow-x-auto
        whitespace-nowrap
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
          className="item relative m-4"
          id="item-1"
          onClick={(e) => select(e)}
        >
          Osana
        </div>
        <div
          className="item relative  m-4"
          id="item-2"
          onClick={(e) => select(e)}
        >
          Damo
        </div>
        <div
          className="item relative  m-4"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative  m-4"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative  m-4"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative  m-4"
          id="item-3"
          onClick={(e) => select(e)}
        >
          Watchtower
        </div>
        <div
          className="item relative  m-4"
          id="item-4"
          onClick={(e) => select(e)}
        >
          Really Long Item
        </div>
        <div
          className="item relative  m-4"
          id="item-5"
          onClick={(e) => select(e)}
        >
          sm
        </div>
      </div>
    </>
  );
};

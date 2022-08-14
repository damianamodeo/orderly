export const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <div
        className="
          fixed 
          inset-x-0 
          flex 
          h-navW
          justify-between 
          items-center
          border-b(undo)
          border-bgDark(undo) 
          bg-bg 
          p-3
          md:left-navW
          z-50
          "
      >
        {headerLeft}
        {title}
        {headerRight}
      </div>
    </>
  );
};

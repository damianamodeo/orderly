export const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <div
        className="
          border-b(undo) 
          border-bgDark(undo) 
          fixed 
          inset-x-0
          z-50 
          flex
          h-navW
          items-center 
          justify-between 
          bg-bg
          dark:bg-bgD
          p-3
          md:left-navW
          "
      >
        {headerLeft}
        {title}
        {headerRight}
      </div>
    </>
  );
};

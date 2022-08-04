export const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <div
        className="
        fixed 
        inset-x-0 
        flex 
        h-12
        justify-between 
        items-center
        border-b 
        border-bgDark 
        bg-bg 
        p-2
        md:left-12"
      >
        {headerLeft}
        {title}
        {headerRight}
      </div>
    </>
  );
};

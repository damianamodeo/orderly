export const Icon = ({ children, label, action }) => {
  return (
    <>
      <div
        className="
        flex 
        flex-col 
        items-center 
        space-x-2 
        hover:text-primary 
        md:h-12 
        landscape:flex-row"
        onClick={action}
      >
        {children}
        <div
          className="
          text-xs 
          md:hidden"
        >
          {label}
        </div>
      </div>
    </>
  );
};

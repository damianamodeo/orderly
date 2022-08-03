export const Content = ({ children }) => {
  return (
    <>
      <div
        className="
        bg-backgroundLighter 
        absolute
        h-screen 
        w-screen
        "
      ></div>
      <div
        className="absolute 
        inset-y-12
        inset-x-0
        overflow-auto 
        bg-blue-100 
        md:left-12 
        md:right-0
        md:bottom-0"
      >
        {children}
      </div>
    </>
  );
};

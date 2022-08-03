export const Header = ({ title }) => {
  return (
    <>
      <div
        className="
        fixed 
        inset-x-0 h-12 
        border-b 
        border-bgDark 
        bg-bg 
        p-2 
        md:left-12"
      >
        {title}
      </div>
    </>
  );
};

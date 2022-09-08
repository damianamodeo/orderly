export const Card = ({ action, children }) => {
  return (
    <div
      className="
        m-1
        grid
        bg-white 
        px-2
        py-6
        dark:bg-bgD
      "
      onClick={action}
    >
      {children}
    </div>
  );
};

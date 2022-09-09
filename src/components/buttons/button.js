export const Button = ({ action, children }) => {
  return (
    <div
      className="dark:bg-buttonD w-56 text-center bg-button p-2 text-white dark:text-black m-auto"
      onClick={action}
    >
      {children}
    </div>
  );
};

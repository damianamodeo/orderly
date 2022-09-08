export const Button = ({ action, children }) => {
  return (
    <div
      className="dark:bdDarkD w-80 m-auto my-2 bg-bgDark px-20 py-2 text-white dark:text-black"
      onClick={action}
    >
      {children}
    </div>
  );
};

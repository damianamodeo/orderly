export const Icon = ({ children, label, action, active }) => {
  return (
    <>
      <div
        className="flex flex-col items-center gap-1 space-x-2 md:h-navW landscape:flex-row "
        onClick={action}
      >
        {children}
        <div className={`text-navbar md:hidden ${active == label ? "text-primary" : "text-jwBlack"}`}>{label}</div>
      </div>
    </>
  );
};
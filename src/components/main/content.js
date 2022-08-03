export const Content = ({ children, bgColor }) => {
  const styles = "fixed h-screen w-screen " + bgColor;

  return (
    <>
      <div className={styles}></div>
      <div
        className="
        absolute 
        inset-y-12
        inset-x-0
        overflow-auto
        overscroll-y-contain
        md:left-12 
        md:right-0
        md:bottom-0"
      >
        {children}
      </div>
    </>
  );
};

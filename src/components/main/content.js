export const Content = ({ children, bgColor }) => {
  const styles = "fixed h-screen w-screen " + bgColor;

  return (
    <>
      <div className={styles}></div>
      <div
        className="
          absolute
          inset-y-navW
          inset-x-0
          overflow-auto
          overscroll-y-contain
          md:left-navW
          md:right-0
          md:bottom-0
          landscape:m d:bottom-0
          landscape:bottom-10
          "
      >
        {children}
      </div>
    </>
  );
};

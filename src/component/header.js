const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <div className="header">
      <div className='header-left'>{headerLeft}</div>
      <div className="title">{title}</div>
      <div className='header-right'>{headerRight}</div>
    </div>
  );
};

export default Header;

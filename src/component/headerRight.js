const HeaderRight = ({ label, actionRight }) => {
  return <div onClick={() => actionRight()}>{label}</div>;
};

export default HeaderRight;

const HeaderLeft = ({ label, actionLeft }) => {
  return <div onClick={() => actionLeft()}>{label}</div>;
};
export default HeaderLeft;

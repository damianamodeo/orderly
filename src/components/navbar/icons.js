import HomeIcon from "@mui/icons-material/Home";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";

export const Icon = ({ children, label, action }) => {
  return (
    <>
      <div className="flex flex-col landscape:flex-row space-x-2 md:h-12 items-center hover:text-primary" onClick={action}>
        {children}
        <div className="text-xs md:hidden">{label}</div>
      </div>
    </>
  );
};

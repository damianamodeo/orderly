import HomeIcon from "@mui/icons-material/Home";
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

export const Navbar = ({ dashboardPage, publisherPage }) => {
  return (
    <>
      <div className="bg-red-300 fixed inset-x-0 bottom-0 h-12 md:h-screen md:w-12">
        <HomeIcon onClick={dashboardPage}/>
        <PeopleAltSharpIcon onClick={publisherPage}/>
      </div>
    </>
  );
};

import { DashboardIcon } from "../../icons/navbar/dashboard";
import { PublishersIcon } from "../../icons/navbar/publishers";
import { SettingsIcon } from "../../icons/navbar/settings";
import { NavbarIcon } from "../icons/navbar";

export const Navbar = ({ dashboardScreen, publisherScreen, settingsScreen, active }) => {
  return (
    <>
      <div
        className="
          fixed 
          bottom-0
          z-50 
          flex 
          h-navW 
          w-full 
          items-end
          justify-around
          
          border-t 
          border-bgDark 
          dark:border-bgDarkD
          bg-bg
          dark:bg-bgD
          md:h-screen 
          md:w-navW
          md:flex-col
          md:items-center
          md:justify-start 
          md:border-r
          md:border-t-0
          landscape:h-10 
          landscape:items-center
          landscape:md:h-screen 
          "
      >
        <NavbarIcon label="Dashboard" active={active} action={dashboardScreen}>
          <DashboardIcon active={active} />
        </NavbarIcon>
        <NavbarIcon label="Publishers" active={active} action={publisherScreen}>
          <PublishersIcon active={active} />
        </NavbarIcon>
        <NavbarIcon label="Settings" active={active} action={settingsScreen}>
          <SettingsIcon active={active} />
        </NavbarIcon>
      </div>
    </>
  );
};

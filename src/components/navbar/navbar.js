import { useState } from "react";
import { DashboardIcon } from "../../icons/dashboard";
import { PublishersIcon } from "../../icons/publishers";
import { SettingsIcon } from "../../icons/settings";
import { Icon } from "./icons";

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
          bg-bg
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
        <Icon label="Dashboard" active={active} action={dashboardScreen}>
          <DashboardIcon active={active} />
        </Icon>
        <Icon label="Publishers" active={active} action={publisherScreen}>
          <PublishersIcon active={active} />
        </Icon>
        <Icon label="Settings" active={active} action={settingsScreen}>
          <SettingsIcon active={active} />
        </Icon>
      </div>
    </>
  );
};

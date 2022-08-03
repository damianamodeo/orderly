import { Icon } from "./icons";
import { PublishersIcon, DashboardIcon } from './svg';

export const Navbar = ({ dashboardScreen, publisherScreen }) => {
  return (
    <>
      <div
        className="fixed 
      inset-x-0 bottom-0 flex h-12 border-t md:border-r md:border-t-0 border-bgDark
      items-center justify-around bg-bg
      md:h-screen md:w-12 md:flex-col md:justify-start z-50"
      >
        <Icon label="Dashboard" action={dashboardScreen}>
        <DashboardIcon/>
        </Icon>
        <Icon label="Publishers" action={publisherScreen}>
          <PublishersIcon/>
        </Icon>
      </div>
    </>
  );
};

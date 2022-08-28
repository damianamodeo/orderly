import { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { Dashboard } from "../dashboard/dashboard";
import { Publishers } from "../publishers/publishers";
import { Settings } from "../settings/settings";

export const Screen = () => {
  const dashboardScreen = () => {
    setActive("Dashboard");
    setScreen(<Dashboard />);
  };

  const publisherScreen = () => {
    setActive("Publishers");
    setScreen(<Publishers />);
  };

  const settingsScreen = () => {
    setActive("Settings");
    setScreen(<Settings />);
  };

  const [page, setScreen] = useState(<Publishers />);
  const [active, setActive] = useState("Publishers");

  return (
    <>
      <Navbar
        active={active}
        dashboardScreen={dashboardScreen}
        publisherScreen={publisherScreen}
        settingsScreen={settingsScreen}
      />
      {page}
    </>
  );
};

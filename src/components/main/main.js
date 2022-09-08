import React from "react";
import { useState } from "react";
import { Navbar } from "../main/navbar";
import { Publishers } from "../pages/publishers/publishers";

export const Main = () => {
  const dashboardScreen = () => {
    import("../pages/dashboard/dashboard").then(({ Dashboard }) => {
      setActive("Dashboard");
      setScreen(<Dashboard />);
    })
  };

  const publisherScreen = () => {
    setActive("Publishers");
    setScreen(<Publishers />);
  };

  const settingsScreen = () => {
    import("../pages/settings/settings").then(({ Settings }) => {
      setActive("Settings");
      setScreen(<Settings />);
    })
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
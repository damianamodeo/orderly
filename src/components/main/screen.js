import { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { Dashboard } from "../dashboard/dashboard";
import { Publishers } from "../publishers/publishers";

export const Screen = () => {
  const headerTitle = "Dashboard";
  const dashboardScreen = () => {
    setScreen(<Dashboard />);
  };

  const publisherScreen = () => {
    setScreen(<Publishers title={headerTitle} />);
  };

  const [page, setScreen] = useState(<Dashboard />);

  return (
    <>
      {page}
      <Navbar
        dashboardScreen={dashboardScreen}
        publisherScreen={publisherScreen}
      />
    </>
  );
};

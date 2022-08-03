import { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { Dashboard } from "../dashboard/dashboard";
import { Publishers } from "../publishers/publishers";

export const Screen = () => {
  const dashboardPage = () => {
    setPage(<Dashboard />);
  };

  const publisherPage = () => {
    setPage(<Publishers />);
  };

  const [page, setPage] = useState(<Dashboard />);

  return (
    <>
      <Navbar dashboardPage={dashboardPage} publisherPage={publisherPage} />
        {page}
    </>
  );
};

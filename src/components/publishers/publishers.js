import { useState } from "react";
import { Header } from "../header/header";
import { PublisherList } from "./publisherList";

export const Publishers = () => {
  const [page, setPage] = useState(<PublisherList />);

  return (
    <>
      <Header />
      <div className="bg-blue-300 fixed inset-y-12 inset-x-0 md:left-12 md:right-0 md:bottom-0">
        <PublisherList />
      </div>
    </>
  );
};

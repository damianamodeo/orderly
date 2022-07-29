import { useState } from "react";
import { Header } from "../header/header";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-300 fixed inset-y-12 inset-x-0 md:left-12 md:right-0 md:bottom-0">
        Dashboard
      </div>
    </>
  );
};

import { Header } from "../header/header";
import { Navbar } from "../navbar/navbar";

export const Page = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="bg-blue-300 fixed inset-y-12 inset-x-0 md:left-12 md:right-0 md:bottom-0">
        content
      </div>
    </>
  );
};

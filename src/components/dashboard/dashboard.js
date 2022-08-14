import { useState } from "react";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { InputText } from "../form/text";

export const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard 4" />
      <Content bgColor="bg-red-100">
        <div
          className="
            m-2 
            font-semibold 
            text-secondary
          "
        >
          Dashboard:
        </div>
      </Content>
    </>
  );
};

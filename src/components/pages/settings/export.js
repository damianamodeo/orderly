// import { db } from "../../services/db/dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../main/header";
import { Content } from "../main/content";
// import { useState } from "react";

export const Export = () => {
  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<div className="text-header font-bold">Settings</div>}
        headerRight={<div className="text-header text-primary"></div>}
      />
      <Content>
        <div className="grid">
          <div className="">Export All Contacts to PDF</div>
        </div>
      </Content>
    </>
  );
};

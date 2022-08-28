import { db } from "../../services/db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { useState } from "react";
import { Export } from "./export";
import { downloadPdf } from "../../services/pdf/downloadPdf";
import { exportStore } from "../../services/db/exportStore";
import { ImportStore } from "./importStore";


export const Settings = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );
  const exportScreen = () => {};

  const importScreen = () => {};

  const [page, setPage] = useState(<Export />);

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<div className="text-header font-bold">Settings</div>}
        headerRight={<div className="text-header text-primary"></div>}
      />
      <Content bgColor={"bg-bgLightest "}>
        <div
          className="m-4 bg-white p-4 text-center"
          onClick={() => {
            downloadPdf(publishers);
          }}
        >
          Export Congregation to PDF Contact List
        </div>
        <div
          className="m-4 bg-white p-4 text-center"
          onClick={() => {
            exportStore("publishers", "ord");
          }}
        >
          Export Congregation to Orderly file
        </div>
        <div
          className="m-4 bg-white p-4 text-center"
          onClick={() => {
            exportStore("publishers", "csv");
          }}
        >
          Export Congregation to CSV file
        </div>
        <ImportStore />
      </Content>
    </>
  );
};

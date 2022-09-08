import { db } from "../../../services/db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
// import { useState } from "react";
// import { Export } from "./export";
import { downloadPdf } from "../../../services/pdf/downloadPdf";
import { exportStore } from "../../../services/db/exportStore";
import { ImportStores } from "./importStores";
import { Card } from "../../../temp/components/card";
import { Text } from "../../text/default";
import { Heading } from "../../text/heading";

export const Settings = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );
  // const exportScreen = () => {};

  // const importScreen = () => {};

  // const [page, setPage] = useState(<Export />);

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<Heading>Settings</Heading>}
        headerRight={<div className="text-header text-primary"></div>}
      />
      <Content bgColor={"bg-bgLightest dark:bg-black "}>
        <Card
          className="m-4 bg-white p-4 text-center"
          action={() => {
            downloadPdf(publishers);
          }}
        >
          <Text>Export Congregation to PDF Contact List</Text>
        </Card>
        <Card
          className="m-4 bg-white p-4 text-center"
          action={() => {
            exportStore("publishers", "ord");
          }}
        >
          <Text>Export Congregation to Orderly file</Text>
        </Card>
        <Card
          className="m-4 bg-white p-4 text-center"
          action={() => {
            exportStore("publishers", "csv");
          }}
        >
          <Text>Export Congregation to CSV file</Text>
        </Card>
        <ImportStores />
      </Content>
    </>
  );
};

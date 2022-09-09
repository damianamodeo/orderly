import { db } from "../../../services/db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
// import { useState } from "react";
// import { Export } from "./export";
import { downloadPdf } from "../../../services/pdf/downloadPdf";
import { exportStore } from "../../../services/db/exportStore";
import { Card } from "../../../temp/components/card";
// import { Text } from "../../text/default";
import { Heading } from "../../text/heading";
import { Button } from "../../buttons/button";
import { CardLabel } from "../../text/card-label";
import { FileInput } from "../../inputs/file";
import { importStores } from "../../../services/db/importStores";
import { downloadPdfjs } from "../../../services/pdf/jsPDF";

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
        <Card>
          <CardLabel>Export Congregation</CardLabel>
          <div className="my-3 flex flex-col content-center gap-8">
            <Button
              action={() => {
                downloadPdfjs(publishers);
              }}
            >
              PDF
            </Button>
            <Button
              action={() => {
                exportStore("publishers", "ord");
              }}
            >
              ORD
            </Button>
            <Button
              action={() => {
                exportStore("publishers", "csv");
              }}
            >
              CSV
            </Button>
          </div>
        </Card>
        <Card>
          <CardLabel>Import Congregation</CardLabel>

          <div className="my-3 flex flex-col content-center gap-3">
            <FileInput
              id="import-stores"
              label=""
              helpText="Select a .csv or .ord file"
              types=".ord,.csv"
            />
            {}
            <Button
              action={() => {
                importStores("publishers");
              }}
            >
              Import
            </Button>
          </div>
        </Card>
      </Content>
    </>
  );
};

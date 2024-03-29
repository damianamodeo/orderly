// import { db } from "../../services/db/dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { Heading } from "../../text/heading";

export const Dashboard = () => {
  // const publishers = useLiveQuery(() =>
  //   db.publishers.orderBy("[lastName+firstName]").toArray()
  // );

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<Heading>Dashboard</Heading>}
        headerRight={<div></div>}
      />
      <Content bgColor="bg-white dark:bg-black">
        {/* <div></div>
        <div
          className="
            m-2 
            font-semibold 
            text-secondary
          "
        >
          <div
            className="m-8 h-12 w-full bg-white"
            onClick={() => {
              exportStore("publishers");
            }}
          >
            Export Publishers
          </div>

          <form className="">
            <input className="" type="file" id="import-publishers" />
          </form>
          <button
            className="m-8 h-12 w-24 bg-white"
            onClick={() => {
              importStoreFromCsv("publishers");
            }}
          >
            Import
          </button>
          <form className="">
            <input className="" type="file" id="import-publishers-csv" />
          </form>
          <button
            className="m-8 h-12 w-24 bg-white"
            onClick={() => {
              importStoreFromCsv("publishers");
            }}
          >
            Import
          </button>
        </div>
        <div
          id="makepdf"
          className="m-8 h-12 w-24 bg-white"
          onClick={() => {
            downloadPdf();
          }}
        >
          Make PDF
        </div> */}
      </Content>
    </>
  );
};

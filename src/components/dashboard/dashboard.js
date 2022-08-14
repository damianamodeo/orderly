import { useState } from "react";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { InputText } from "../form/text";
import Dexie from "dexie";
import { db } from "../../db/dexie";
import download from "downloadjs";
import { exportStore } from "../../db/exportStore";
import { importStore } from "../../db/importStore";


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
          <div
            onClick={() => {
              exportStore("publishers");
            }}
          >
            Export
          </div>
          <form>
            <input type="file" id="import-publishers" />
            <button onClick={() => {importStore("publishers")}}>Import</button>
          </form>
        </div>
      </Content>
    </>
  );
};

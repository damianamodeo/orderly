import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { InputText } from "../form/text";
import Dexie from "dexie";
import { db } from "../../db/dexie";
import download from "downloadjs";
import { exportStore } from "../../db/exportStore";
import { importStore } from "../../db/importStore";
import PDFDocument from "../../services/pdf/pdfkit.standalone.js";
import blobStream from "../../services/pdf/blob-stream.js";

const makePDF = (publishers, downloadPDF) => {
  return (
    <>
      <div></div>
    </>
  );
};

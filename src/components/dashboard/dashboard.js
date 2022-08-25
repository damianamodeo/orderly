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
import { importStoreFromCsv } from "../../db/importStoreFromCsv";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const Dashboard = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  const downloadPdf = () => {
    let docDefinition = {
      content: [],
      pageMargins: 10,
    };
    let family;
    publishers
      ?.filter((p) => !p.familyHead || p.id === p.familyHead )
      .forEach(
        (head) => (
          (family = [
            {
              svg: `<svg height="20" width="580"><line x1="0" y1="18" x2="580" y2="18" stroke="#4a6da7" style="stroke-width:2" /></svg>`,
            },
            {
              columns: [
                {
                  text: head.lastName.toUpperCase(),
                  fontSize: 18,
                  bold: true,
                  width: "25%",
                },
                { text: head.homePhone, width: "25%" },
                {
                  text: `${head.unitNumber ? `${head.unitNumber}/` : ""}${head.houseNumber
                  } ${head.street}, ${head.suburb}`,
                  fontSize: 13,
                },
              ],
            },
            {
              columns: [
                { text: head.firstName, width: "25%" },
                { text: head.mobilePhone, width: "25%" },
                {
                  text: head.personalEmail,
                },
              ],
            },
          ]),
          publishers
            ?.filter((p) => p.id !== head.id && p.familyHead === head.id)
            .forEach((member) =>
              family.push([
                {
                  columns: [
                    { text: member.firstName, width: "25%" },
                    { text: member.mobilePhone, width: "25%" },
                    {
                      text: member.personalEmail,
                    },
                  ],
                },
              ])
            ),
          docDefinition.content.push({ stack: family, unbreakable: true })
        )
      );
      console.log(docDefinition)

    pdfMake.createPdf(docDefinition).download("damo.pdf");
    // const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    // pdfDocGenerator.getDataUrl((dataUrl) => {
    //   const targetElement = document.querySelector("#download");
    //   const iframe = document.createElement("iframe");
    //   iframe.src = dataUrl;
    //   targetElement.appendChild(iframe);
    //   iframe.classList.add("fixed", "w-screen", "h-screen");
    // });
  };

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<div className="text-header font-bold">Dashboard</div>}
        headerRight={<div></div>}
      />
      <Content bgColor="bg-white">
        <div></div>
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
        </div>
      </Content>
    </>
  );
};

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
var pdfMake = require("pdfmake/build/pdfmake.js");
var pdfFonts = require("pdfmake/build/vfs_fonts.js");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const Test = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );
  const heads = useLiveQuery(() =>
    db.publishers
      .orderBy("[lastName+firstName]")
      .filter((p) => p.id === p.familyHead)
      .toArray()
  );
  const members = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  const downloadPdf = () => {
    var docDefinition = {
      content: [],
      pageMargins: 10,
    };
    let family;
    publishers
      ?.filter((p) => p.id === p.familyHead)
      .forEach(
        (head) => (
          (family = [
            {
              svg: `<svg height="20" width="580"><line x1="0" y1="18" x2="580" y2="18" stroke="#4a6da7" style="stroke-width:2" /></svg>`,
              // margin: [0, 2]
            },
            {
              columns: [
                { text: head.lastName.toUpperCase(), fontSize: 18, bold: true, width: "25%" },
                { text: head.homePhone, width: "25%" },
                {
                  text: `${head.unitNumber ? `${head.unitNumber}/` : ""} ${
                    head.houseNumber
                  } ${head.street}, ${head.suburb}`, fontSize: 13
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
          docDefinition.content.push(family)
        )
      );

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
      <div
        id="download"
        onClick={downloadPdf()}
        className=" bg-red w-screen hover:text-red-500 "
      >
        DOWNLOAD
      </div>
    </>
  );
};

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
// import PDFDocument from "../../services/pdf/pdfkit.standalone.js";
import blobStream from "../../services/pdf/blob-stream.js";

const makePDF = (publishers) => {
  let line = 15;
  const lineSpacing = 20;
  const doc = new PDFDocument({ size: "A4" });
  const stream = doc.pipe(blobStream());

  publishers
    ?.filter((p) => p.id === p.familyHead)
    .forEach(
      (head) => (
        doc
          .moveTo(10, line) // set the current point
          .lineTo(585, line)
          .stroke(),
        (line = line + lineSpacing - 10),
        doc.fontSize(20).fillColor("#942926").text(`${head.lastName.toUpperCase()}`, 20, line),
        doc
          .fontSize(14)
          .text(`${head.homePhone ? `${head.homePhone}` : ""} `, 190, line),
        doc
          .fontSize(14)
          .text(
            `${head.unitNumber ? `${head.unitNumber}/` : ""} ${
              head.houseNumber
            } ${head.street}, ${head.suburb}`,
            250,
            line,
            {
              
            width: 330,
            align: "right"
            }
          ),
        (line = line + lineSpacing),
        doc.fillColor("black").text(`${head.firstName}`, 60, line),
        doc.text(
          `${head.mobilePhone ? `${head.mobilePhone}` : "---"}`,
          190,
          line,
          {
            link: `tel://${head.mobilePhone}`,
          }
        ),
        doc.text(
          `${head.personalEmail ? `${head.personalEmail}` : "---"}`,
          250,
          line,
          {
            link: `tel://${head.personalEmail}`,
            width: 330,
            align: "right"
          }
        ),
        (line = line + lineSpacing),
        publishers
          ?.filter((p) => p.id !== head.id && p.familyHead === head.id)
          .forEach(
            (member) => (
              doc.text(`${member.firstName}`, 60, line),
              doc.text(
                `${member.mobilePhone ? `${member.mobilePhone}` : ""}`,
                190,
                line,
                {
                  link: `tel://${member.mobilePhone}`,
                }
              ),
              doc.text(
                `${head.personalEmail ? `${member.personalEmail}` : "---"}`,
                250,
                line,
                {
                  link: `tel://${member.personalEmail}`,
                  width: 330,
                  align: "right"
                }
              ),
              (line = line + lineSpacing)
            )
          ),
        (line = line + lineSpacing - 10)
      )
    );

  doc.end();

  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  let blob;

  function download() {
    if (!blob) return;
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = "test.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  stream.on("finish", function () {
    blob = stream.toBlob("application/pdf");
    // const url = stream.toBlobURL("application/pdf");
    // const iframe = document.querySelector("iframe");
    // iframe.src = url;
    download();
  });



};

export const Dashboard = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

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
            className="bg-white w-24 m-8 h-12"
            onClick={() => {
              exportStore("publishers");
            }}
          >
            Export
          </div>
          <form className="">
            <input className="" type="file" id="import-publishers" />
            <button
              className="bg-white w-24 m-8 h-12"
              onClick={() => {
                importStore("publishers");
              }}
            >
              Import
            </button>
          </form>
        </div>
        <div
          id="makepdf"
          className="bg-white w-24 m-8 h-12"
          onClick={() => {
            makePDF(publishers);
          }}
        >
          Make PDF
        </div>
      </Content>
    </>
  );
};

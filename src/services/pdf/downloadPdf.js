import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const downloadPdf = (publishers) => {
  let docDefinition = {
    content: [],
    pageMargins: 10,
  };
  let family;
  publishers
    ?.filter((p) => !p.familyHead || p.id === p.familyHead)
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
                lineHeight: 1.2,
                width: "25%",
              },
              { text: head.homePhone, width: "20%" },
              {
                text: `${head.unitNumber ? `${head.unitNumber}/` : ""}${
                  head.houseNumber
                } ${head.street}, ${head.suburb}`,
                fontSize: 18,
                bold: true,
                alignment: "right",
                link: `https://www.google.com/maps/place/${head.houseNumber}+${head.street},+${head.suburb}`,
              },
            ],
          },
          {
            columns: [
              { text: head.firstName, width: "25%", lineHeight: 1.4 },
              {
                text: head.mobilePhone,
                width: "20%",
                link: `tel://${head.mobilePhone}`,
              },
              {
                text: head.personalEmail,
                link: `mailto:${head.personalEmail}`,
                alignment: "right",
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
                  { text: member.firstName, width: "25%", lineHeight: 1.4 },
                  {
                    text: member.mobilePhone,
                    width: "20%",
                    link: `tel://${member.mobilePhone}`,
                  },
                  {
                    text: member.personalEmail,
                    link: `mailto:${member.personalEmail}`,
                    alignment: "right",
                  },
                ],
              },
            ])
          ),
        docDefinition.content.push({ stack: family, unbreakable: true })
      )
    );
  console.log(docDefinition);

  pdfMake.createPdf(docDefinition).download("damo.pdf");
};

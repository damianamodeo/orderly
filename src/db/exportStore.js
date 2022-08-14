import { exportToJsonString } from "./exportToJson";
import { db } from "./dexie";

export const exportStore = (store) => {
  db.open()
    .then(function () {
      const idbDatabase = db.backendDB(); // get native IDBDatabase object from Dexie wrapper
      // export to JSON, clear database, and import from JSON
      exportToJsonString(idbDatabase, store, function (err, jsonString) {
        if (err) {
          console.error(err);
        } else {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, "0");
          var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = today.getFullYear();
          const data = jsonString;
          const blob = new Blob([data], { "application/json": [".json"] });
          const href = URL.createObjectURL(blob);
          const a = Object.assign(document.createElement("a"), {
            href,
            style: "display:none",
            download: "publishers " + yyyy + "-" + mm + "-" + dd + ".ord",
          });
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(href);
          a.remove();
        }
      });
    })
    .catch(function (e) {
      console.error("Could not connect. " + e);
    });
};

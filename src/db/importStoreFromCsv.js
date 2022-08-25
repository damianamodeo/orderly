import { toTitleCase } from "../services/formatting/letterCase";
import { clearStore } from "./clearStore";
import { db } from "./dexie";

function csvToJson(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
    for (var j = 0; j < headers.length; j++) {
      if (headers[j] === "lastName") {
        obj[headers[j]] = toTitleCase(currentline[j]);
        console.log("last");
      } else if (headers[j] === "id" || headers[j] === "familyHead") {
        obj[headers[j]] = parseInt(currentline[j]);
        console.log("last");
      } else {
        console.log("not");
        {
          obj[headers[j]] = currentline[j];
        }
      }
    }
    result.push(obj);
  }

  return JSON.stringify(result); //JSON
}

const importFromCsvString = (idbDatabase, csvString, cb) => {
  const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
  const size = objectStoreNamesSet.size;
  if (size === 0) {
    cb(null);
  } else {
    const objectStoreNames = Array.from(objectStoreNamesSet);
    const transaction = idbDatabase.transaction(objectStoreNames, "readwrite");
    transaction.onerror = (event) => alert("cb(event)");

    const importObject = JSON.parse(`{"publishers": ${csvToJson(csvString)}}`);
    // const importObject = JSON.parse(csvString);
    console.log(importObject);

    // Delete keys present in JSON that are not present in database
    Object.keys(importObject).forEach((storeName) => {
      if (!objectStoreNames.includes(storeName)) {
        delete importObject[storeName];
      }
    });

    if (Object.keys(importObject).length === 0) {
      // no object stores exist to import for
      cb(null);
    }

    objectStoreNames.forEach((storeName) => {
      let count = 0;

      const aux = Array.from(importObject[storeName] || []);

      if (importObject[storeName] && aux.length > 0) {
        aux.forEach((toAdd) => {
          const request = transaction.objectStore(storeName).add(toAdd);
          request.onsuccess = () => {
            count++;
            if (count === importObject[storeName].length) {
              // added all objects for this store
              delete importObject[storeName];
              if (Object.keys(importObject).length === 0) {
                // added all object stores
                cb(null);
              }
            }
          };
          request.onerror = (event) => {
            console.log(event);
          };
        });
      } else {
        if (importObject[storeName]) {
          delete importObject[storeName];
          if (Object.keys(importObject).length === 0) {
            // added all object stores
            cb(null);
          }
        }
      }
    });
  }
};

export const importStoreFromCsv = (store) => {
  let file = document.querySelector("#import-publishers").files[0];
  let reader = new FileReader();
  reader.onloadend = () => {
    clearStore(db.backendDB(), store);
    importFromCsvString(db.backendDB(), reader.result, (err) => {});
  };
  reader.readAsText(file);
};

import { jsonToCsv } from "./jsonToCsv";

 export const convertToJsonString = (idbDatabase, store, format, cb) => {
  const exportObject = {};
    // const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
  const objectStoreNamesSet = [store];
  const size = objectStoreNamesSet.size;
  if (size === 0) {
    cb(null, (format === "csv") ? jsonToCsv(exportObject[store]) : JSON.stringify(exportObject));
  } else {
    const objectStoreNames = Array.from(objectStoreNamesSet);
    const transaction = idbDatabase.transaction(objectStoreNames, "readonly");
    transaction.onerror = (event) => cb(event, null);

    objectStoreNames.forEach((storeName) => {
      const allObjects = [];
      transaction.objectStore(storeName).openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          allObjects.push(cursor.value);
          cursor.continue();
        } else {
          exportObject[storeName] = allObjects;
          if (objectStoreNames.length === Object.keys(exportObject).length) { 
            cb(null, (format === "csv") ? jsonToCsv(exportObject[store]) : JSON.stringify(exportObject));
          }
        }
      };
    });
  }
}
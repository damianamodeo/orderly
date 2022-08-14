/**
 * Export all data from an IndexedDB database
 * @param {IDBDatabase} idbDatabase - to export from
 * @param {function(Object?, string?)} cb - callback with signature (error, jsonString)
 */
 export const exportToJsonString = (idbDatabase, store, cb) => {
  const exportObject = {};
    // const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
  const objectStoreNamesSet = [store];
  const size = objectStoreNamesSet.size;
  if (size === 0) {
    cb(null, JSON.stringify(exportObject));
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
            cb(null, JSON.stringify(exportObject));
          }
        }
      };
    });
  }
}
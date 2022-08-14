
/**
 * Import data from JSON into an IndexedDB database. This does not delete any existing data
 *  from the database, so keys could clash.
 *
 * Only object stores that already exist will be imported.
 *
 * @param {IDBDatabase} idbDatabase - to import into
 * @param {string} jsonString - data to import, one key per object store
 * @param {function(Object)} cb - callback with signature (error), where error is null on success
 * @return {void}
 */

export const importFromJsonString = (idbDatabase, jsonString, cb) => {
  const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
  const size = objectStoreNamesSet.size;
  if (size === 0) {
    cb(null);
  } else {
    const objectStoreNames = Array.from(objectStoreNamesSet);
    const transaction = idbDatabase.transaction(objectStoreNames, "readwrite");
    transaction.onerror = (event) => alert('cb(event)');

    const importObject = JSON.parse(jsonString);

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
}
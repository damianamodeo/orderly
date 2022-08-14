
/**
 * Clears a database of all data.
 *
 * The object stores will still exist but will be empty.
 *
 * @param {IDBDatabase} idbDatabase - to delete all data from
 * @param {function(Object)} cb - callback with signature (error), where error is null on success
 * @return {void}
 */
 export const clearStore = (idbDatabase, store, cb) => {
  //   const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
    const objectStoreNamesSet = [store];
    const size = objectStoreNamesSet.size;
    if (size === 0) {
      cb(null);
    } else {
      const objectStoreNames = Array.from(objectStoreNamesSet);
      const transaction = idbDatabase.transaction(objectStoreNames, "readwrite");
      transaction.onerror = (event) => cb(event);
  
      let count = 0;
      objectStoreNames.forEach(function (storeName) {
        transaction.objectStore(storeName).clear().onsuccess = () => {
          count++;
          if (count === size) {
            // cleared all object stores
            cb(null);
          }
        };
      });
    }
  }
  
import { clearStore } from "./clearStore";
import { db } from "./dexie";
import { importFromJsonString } from "./importFromJson";

export const importStore = (store) => {
  let file = document.querySelector("#import-publishers").files[0];
  let reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result)
    clearStore(db.backendDB(), store);
    importFromJsonString(db.backendDB(), reader.result, (err) => {});

  };
  reader.readAsText(file);
};

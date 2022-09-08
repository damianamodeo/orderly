import { clearStore } from "./clearStore";
import {convertFromJsonString} from "./convertFromJsonString"
import { db } from "./dexie";

export const importStores = (store) => {
  let file = document.querySelector("#import-stores").files[0];
  let reader = new FileReader();
  reader.onloadend = () => {
    console.log(file.type)
    clearStore(db.backendDB(), store);
    convertFromJsonString(db.backendDB(), reader.result, file.type, (err) => {console.log(err)});
  };
  reader.readAsText(file);
};

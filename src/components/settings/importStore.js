import { importStore } from "../../services/db/importStore";
import { FileInput } from "../form/file";

export const ImportStore = () => {
  return (
    <>
      <div className="bg-white m-4 h-32 p-2 text-center relative">
        Import Congregation
        <FileInput id="import-store" label="" helpText="" types=".ord,.csv" />
        <div
          className="absolute right-4 w-fit bg-bg p-2 text-right"
          onClick={() => {
            importStore("publishers");
          }}
        >
          Import
        </div>
      </div>
    </>
  );
};

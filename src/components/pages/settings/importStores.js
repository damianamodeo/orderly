import { importStores } from "../../../services/db/importStores";
import { Card } from "../../../temp/components/card";
import { Button } from "../../buttons/button";
import { FileInput } from "../../inputs/file";
import { Text } from "../../text/default";

export const ImportStores = () => {
  return (
    <>
      <Card className="relative m-4 bg-white p-2 text-center">
        <Text>Import Congregation</Text>
        <FileInput
          id="import-stores"
          label=""
          helpText="Select a .csv or .ord file"
          types=".ord,.csv"
        />
        <Button
          action={() => {
            importStores("publishers");
          }}
        >
          Import
        </Button>
      </Card>
    </>
  );
};

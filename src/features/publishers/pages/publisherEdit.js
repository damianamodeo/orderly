import { Typography } from "@mui/material";
import { Header } from "../../header/header";
import { PublisherForm } from "./publisherForm";
import { updatePublisher } from "../idb/dexie";

export const PublisherEdit = ({
  publisher,
  publisherDetails,
}) => {
  const publisherOriginal = structuredClone(publisher);

  return (
    <>
      <Header
        headerLeft={
          <Typography onClick={() => publisherDetails(publisherOriginal)}>
            Cancel
          </Typography>
        }
        title={<Typography>Add Publisher</Typography>}
        headerRight={
          <Typography
            onClick={() =>
              updatePublisher(publisher, publisherDetails(publisher))
            }
          >
            Done
          </Typography>
        }
      />
      <PublisherForm publisher={publisher} />
    </>
  );
};

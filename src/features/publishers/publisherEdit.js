import { Typography } from "@mui/material";
import { Header } from "../header/header";

export const PublisherEdit = ({
  publisher,
  publisherDetails
}) => {
  const publisherUpdate = () => {};
  return (
    <>
      <Header
        headerLeft={<Typography onClick={() => publisherDetails(publisher)}>Cancel</Typography>}
        title="Edit Publisher"
        headerRight={
          <Typography onClick={() => publisherUpdate()}>Done</Typography>
        }
      />
      <Typography>{publisher.firstName}</Typography>
      <Typography>{publisher.lastName}</Typography>
    </>
  );
};

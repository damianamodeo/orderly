import { Typography } from "@mui/material";

export const PublisherCard = ({ publisher }) => {
  return (
    <Typography>
      {publisher.lastName} {publisher.firstName}
    </Typography>
  );
};

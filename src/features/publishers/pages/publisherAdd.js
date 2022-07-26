import { Typography, TextField, Grid, Box, Divider, Chip } from "@mui/material";
import { db } from "../../db/db";
import { Header } from "../../header/header";
import { useState } from "react";
import { formatMobileNumber, formatHomeNumber } from "../functions/formatting";
import { PublisherForm } from "./publisherForm";
import { addPublisher } from "../idb/dexie";

export const PublisherAdd = ({ publisherList }) => {
  const publisher = {};

  return (
    <>
      <Header
        headerLeft={<Typography onClick={publisherList}>Cancel</Typography>}
        title={<Typography>Add Publisher</Typography>}
        headerRight={
          <Typography onClick={() => addPublisher(publisher, publisherList)}>
            Done
          </Typography>
        }
      />
      <PublisherForm publisher={publisher} />
    </>
  );
};

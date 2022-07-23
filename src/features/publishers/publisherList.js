import { db } from "../db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { Grid, Typography } from "@mui/material";
import { Header } from "../header/header";
import AddIcon from '@mui/icons-material/Add';


export const PublisherList = ({ publisherDetails, publisherAdd }) => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  return (
    <>
      <Header
        headerLeft=""
        title="Publishers"
        headerRight={<AddIcon onClick={() => publisherAdd()} />}
      />
      <Grid container spacing={0.5}>
        {publishers?.map((publisher) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={publisher.id}
            onClick={() => publisherDetails(publisher)}
          >
            <Typography>
            {`${publisher.lastName}, ${publisher.firstName}`}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

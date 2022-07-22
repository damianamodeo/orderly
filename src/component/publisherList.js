import Header from "./header";
import HeaderRight from "./headerRight";
import PublisherCard from "./publisherCard";
import { db } from "../js/db";
import { useLiveQuery } from "dexie-react-hooks";
import Grid from "@mui/material/Grid";

export default function PublisherList({ viewPublisherDetails, addPublisher }) {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  return (
    <>
      <Header
        title="Publishers"
        headerRight={<HeaderRight actionRight={addPublisher} label="Add" />}
      />

      <Grid container spacing={.5}>
        {publishers?.map((publisher) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={publisher.id}
            onClick={() => viewPublisherDetails(publisher)}
          >
            <PublisherCard publisher={publisher}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

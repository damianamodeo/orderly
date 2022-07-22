import { Container } from "@mui/material";
import { useState } from "react";
import { PublisherAdd } from "./publisherAdd";
import { PublisherDetails } from "./publisherDetails";
import { PublisherEdit } from "./publisherEdit";
import { PublisherList } from "./publisherList";

export const Publishers = () => {
  const publisherDetails = (publisher) => {
    setPublishers(
      <PublisherDetails
        publisher={publisher}
        publisherList={publisherList}
        publisherEdit={publisherEdit}
      />
    );
  };

  const publisherEdit = (publisher) => {
    setPublishers(
      <PublisherEdit
        publisher={publisher}
        publisherDetails={publisherDetails}
      />
    );
  };

  const publisherAdd = (publisher) => {
    setPublishers(
      <PublisherAdd publisher={publisher} publisherList={publisherList} />
    );
  };

  const publisherList = () => {
    setPublishers(
      <PublisherList
        publisherDetails={publisherDetails}
        publisherAdd={publisherAdd}
      />
    );
  };

  const [publishersPage, setPublishers] = useState(
    <PublisherList
      publisherDetails={publisherDetails}
      publisherAdd={publisherAdd}
    />
  );

  return (
    <>
      <Container
        sx={{
          bgcolor: "#CCC",
        }}
      >
        {publishersPage}
      </Container>
    </>
  );
};

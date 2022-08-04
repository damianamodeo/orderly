import { useState } from "react";
import { Content } from "../main/content";
import { PublisherList } from "./publisherList";
import { PublisherEdit } from "./publisherEdit";
import { PublisherDetails } from "./publisherDetails";
import { PublisherAdd } from "./publisherAdd";

export const Publishers = () => {
  const publisherList = () => {
    setPage(
      <PublisherList
        publisherDetails={publisherDetails}
        publisherAdd={publisherAdd}
      />
    );
  };

  const publisherDetails = (publisher) => {
    setPage(
      <PublisherDetails
        publisher={publisher}
        publisherEdit={publisherEdit}
        publisherDetails={publisherDetails}
        publisherList={publisherList}
      />
    );
  };

  const publisherEdit = (publisher) => {
    setPage(
      <PublisherEdit
        publisher={publisher}
        publisherDetails={publisherDetails}
      />
    );
  };

  const publisherAdd = (publisher) => {
    setPage(
      <PublisherAdd publisher={publisher} publisherList={publisherList} />
    );
  };

  const [page, setPage] = useState(
    <PublisherList
      publisherDetails={publisherDetails}
      publisherAdd={publisherAdd}
    />
  );

  return <>{page}</>;
};

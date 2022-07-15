import Header from "./header";
import PublisherList from "./publisherList";
import PublisherDetails from "./publisherDetails";
import PublisherAdd from "./publisherAdd";
import PublisherEdit from "./publisherEdit";
import { useState } from "react";
import { db } from "../js/db";

const Content = () => {
  const viewPublisherDetails = (publisher) => {
    setContent(
      <PublisherDetails
        publisher={publisher}
        editPublisherDetails={editPublisherDetails}
        viewPublisherList={viewPublisherList}
      />
    );
  };

  const editPublisherDetails = (publisher) => {
    setContent(
      <PublisherEdit
        publisher={publisher}
        viewPublisherDetails={viewPublisherDetails}
        updatePublisherDetails={updatePublisherDetails}
      />
    );
  };

  const updatePublisherDetails = (publisher) => {
    db.publishers.update(publisher.id, {
      firstName: publisher.firstName,
      middleName: publisher.middleName,
      lastName: publisher.lastName,
      otherName: publisher.otherName,
      familyHead: publisher.familyHead,
      birthDate: publisher.birthDate,
      baptismDate: publisher.baptismDate,
      homePhone: publisher.homePhone,
      mobilePhone: publisher.mobilePhone,
      personalEmail: publisher.personalEmail,
      unit: publisher.unit,
      house: publisher.house,
      street: publisher.street,
      suburb: publisher.suburb,
    });

    viewPublisherDetails(publisher);
  };

  const addPublisher = () => {
    setContent(<PublisherAdd viewPublisherList={viewPublisherList} viewPublisherDetails={viewPublisherDetails}/>);
  };

  const viewPublisherList = () => {
    setContent(<PublisherList viewPublisherDetails={viewPublisherDetails} addPublisher={addPublisher}/>);
  };

  const [content, setContent] = useState(
    <PublisherList viewPublisherDetails={viewPublisherDetails} addPublisher={addPublisher}/>
  );

  return (
    <div className="content">
      {content}
    </div>
  );
};

export default Content;

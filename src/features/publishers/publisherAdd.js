import TextField from "@mui/material/TextField";
import { db } from "../db/db";
import { Header } from "../header/header";
import { Typography } from "@mui/material";

export const PublisherAdd = ({publisherList}) => {
  const publisherUpdate = (publisher) => {
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
  };

  const publisherNew = ({ publisher, publisherList }) => {
    // db.publishers.add({
    //   firstName: newPublisher.firstName,
    //   middleName: newPublisher.middleName,
    //   lastName: newPublisher.lastName,
    //   otherName: newPublisher.otherName,
    //   familyHead: newPublisher.familyHead,
    //   birthDate: newPublisher.birthDate,
    //   baptismDate: newPublisher.baptismDate,
    //   homePhone: newPublisher.homePhone,
    //   mobilePhone: newPublisher.mobilePhone,
    //   personalEmail: newPublisher.personalEmail,
    //   unit: newPublisher.unit,
    //   house: newPublisher.house,
    //   street: newPublisher.street,
    //   suburb: newPublisher.suburb,
    // });
    publisherList();
  };

  return (
    <>
      <Header
        headerLeft={<Typography onClick={publisherList}>Cancel</Typography>}
        title="Add Publisher"
        headerRight={
          <Typography onClick={() => publisherNew()}>Done</Typography>
        }
      />
      <TextField></TextField>
    </>
  );
};

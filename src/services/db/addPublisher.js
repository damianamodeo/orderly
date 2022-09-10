import { db } from "./dexie";

export const addPublisher = (publisher, publisherList) => {
  if (publisher.firstName && publisher.lastName) {
    db.publishers
      .add({
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
        jwpubEmail: publisher.jwpubEmail,
        unitNumber: publisher.unitNumber,
        houseNumber: publisher.houseNumber,
        street: publisher.street,
        suburb: publisher.suburb,
      })
      .then((id) => {
        if (!publisher.familyHead) {
          db.publishers.update(id, {
            familyHead: id,
          });
        }
      });
  }
  publisherList();
};

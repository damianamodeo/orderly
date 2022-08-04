import { db } from "./dexie";

export const updatePublisher = (publisher, publisherDetails) => {
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
    unitNumber: publisher.unitNumber,
    houseNumber: publisher.houseNumber,
    street: publisher.street,
    suburb: publisher.suburb,
  });
  publisherDetails(publisher);
};
import Dexie from "dexie";

export const db = new Dexie("Congregation");
db.version(1).stores({
  publishers:
    "++id, firstName, middleName, lastName, [lastName+firstName], otherName, familyHead, birthDate, baptismDate, mobilePhone, homePhone, personalEmail, jwpubEmail, unitNumber, houseNumber, street, suburb, elder, servant, pioneer",
  settings: "userId ",
});

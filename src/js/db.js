import Dexie from "dexie";

export const db = new Dexie("Congregation");
db.version(1).stores({
  publishers:
    "++id, firstName, middleName, lastName, otherName, familyHead, birthDate, baptismDate, mobilePhone, homePhone, personalEmail, jwpubEmail, unit, house, street, suburb, elder, servant, pioneer",
});

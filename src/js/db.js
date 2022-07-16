import Dexie from "dexie";

export const db = new Dexie("Congregation");
db.version(2).stores({
  publishers:
    "++id, firstName, middleName, lastName, [lastName+firstName], otherName, familyHead, birthDate, baptismDate, mobilePhone, homePhone, personalEmail, jwpubEmail, unit, house, street, suburb, elder, servant, pioneer",
});

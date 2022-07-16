import HeaderRight from "./headerRight";
import Header from "./header";
import HeaderLeft from "./headerLeft";
import { db } from "../js/db";
import { useState } from "react";

export default function PublisherAdd({ viewPublisherList, viewPublisherDetails }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [familyHead, setFamilyHead] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [baptismDate, setBaptismDate] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [jwpubEmail, setJwpubEmail] = useState("");
  const [unit, setUnit] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");

  // const publisher = {}

 

  const addPublisher = () => {
    db.publishers.add({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      otherName: otherName,
      familyHead: familyHead,
      birthDate: birthDate,
      baptismDate: baptismDate,
      homePhone: homePhone,
      mobilePhone: mobilePhone,
      personalEmail: personalEmail,
      unit: unit,
      house: house,
      street: street,
      suburb: suburb,
    });
    viewPublisherList();
  };

  return (
    <>
      <Header
        headerLeft={
          <HeaderLeft label="Cancel" actionLeft={viewPublisherList} />
        }
        title="Add Publisher"
        headerRight={<HeaderRight label="Done" actionRight={() => addPublisher()} />}
      />
      <form className="publisher-add">
        Given Name:
        <input
          type="text"
          value={firstName}
          onChange={(ev) => {
            setFirstName(ev.target.value);
          }}
        />
        <br />
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(ev) => {
            setMiddleName(ev.target.value);
          }}
        />
        <br />
        Family Name:
        <input
          type="text"
          value={lastName}
          onChange={(ev) => {
            setLastName(ev.target.value);
          }}
        />
        <br />
        Other Name:
        <input
          type="text"
          value={otherName}
          onChange={(ev) => {
            setOtherName(ev.target.value);
          }}
        />
        <br />
        Family Head:
        <input
          type="text"
          value={familyHead}
          onChange={(ev) => {
            setFamilyHead(ev.target.value);
          }}
        />
        <br />
        Birth Date:
        <input
          type="date"
          value={birthDate}
          onChange={(ev) => {
            setBirthDate(ev.target.value);
          }}
        />
        <br />
        Baptism Date:
        <input
          type="date"
          value={baptismDate}
          onChange={(ev) => {
            setBaptismDate(ev.target.value);
          }}
        />
        <br />
        Phone (Mobile):
        <input
          type="tel"
          value={mobilePhone}
          onChange={(ev) => {
            setMobilePhone(ev.target.value);
          }}
        />
        <br />
        Phone (Home):
        <input
          type="tel"
          value={homePhone}
          onChange={(ev) => {
            setHomePhone(ev.target.value);
          }}
        />
        <br />
        Email (Personal):
        <input
          type="email"
          value={personalEmail}
          onChange={(ev) => {
            setPersonalEmail(ev.target.value);
          }}
        />
        <br />
        Email (Jwpub):
        <input
          type="email"
          value={jwpubEmail}
          onChange={(ev) => {
            setJwpubEmail(ev.target.value);
          }}
        />
        <br />
        Unit:
        <input
          type="text"
          value={unit}
          onChange={(ev) => {
            setUnit(ev.target.value);
          }}
        />
        <br />
        House:
        <input
          type="text"
          value={house}
          onChange={(ev) => {
            setHouse(ev.target.value);
          }}
        />
        <br />
        Street:
        <input
          type="text"
          value={street}
          onChange={(ev) => {
            setStreet(ev.target.value);
          }}
        />
        <br />
        Suburb:
        <input
          type="text"
          value={suburb}
          onChange={(ev) => {
            setSuburb(ev.target.value);
          }}
        />
      </form>
    </>
  );
}

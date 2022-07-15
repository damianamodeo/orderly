import { db } from "../js/db";
import { useState } from "react";

import HeaderRight from "./headerRight";
import Header from "./header";
import HeaderLeft from "./headerLeft";

export default function PublisherEdit({
  publisher,
  viewPublisherDetails,
  updatePublisherDetails,
}) {
  const [firstName, setFirstName] = useState(publisher.firstName);
  const [middleName, setMiddleName] = useState(publisher.middleName);
  const [lastName, setLastName] = useState(publisher.lastName);
  const [otherName, setOtherName] = useState(publisher.otherName);
  const [familyHead, setFamilyHead] = useState(publisher.familyHead);
  const [birthDate, setBirthDate] = useState(publisher.birthDate);
  const [baptismDate, setBaptismDate] = useState(publisher.baptismDate);
  const [homePhone, setHomePhone] = useState(publisher.homePhone);
  const [mobilePhone, setMobilePhone] = useState(publisher.mobilePhone);
  const [personalEmail, setPersonalEmail] = useState(publisher.personalEmail);
  const [jwpubEmail, setJwpubEmail] = useState(publisher.jwpubEmail);
  const [unit, setUnit] = useState(publisher.unit);
  const [house, setHouse] = useState(publisher.house);
  const [street, setStreet] = useState(publisher.street);
  const [suburb, setSuburb] = useState(publisher.suburb);

  return (
    <>
      <Header
        headerLeft={
          <HeaderLeft
            label="Cancel"
            actionLeft={() => viewPublisherDetails(publisher)}
          />
        }
        title="Edit Publisher"
        headerRight={
          <HeaderRight
            label="Done"
            actionRight={() => updatePublisherDetails(publisher)}
          />
        }
      />

      <form className="publisher-add">
        Given Name:
        <input
          type="text"
          value={firstName}
          onChange={(ev) => {
            publisher.firstName = ev.target.value;
            setFirstName(ev.target.value);
          }}
        />
        <br />
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(ev) => {
            publisher.middleName = ev.target.value;
            setMiddleName(ev.target.value);
          }}
        />
        <br />
        Family Name:
        <input
          type="text"
          value={lastName}
          onChange={(ev) => {
            publisher.lastName = ev.target.value;
            setLastName(ev.target.value);
          }}
        />
        <br />
        Other Name:
        <input
          type="text"
          value={otherName}
          onChange={(ev) => {
            publisher.otherName = ev.target.value;
            setOtherName(ev.target.value);
          }}
        />
        <br />
        Family Head:
        <input
          type="text"
          value={familyHead}
          onChange={(ev) => {
            publisher.familyHead = ev.target.value;
            setFamilyHead(ev.target.value);
          }}
        />
        <br />
        Birth Date:
        <input
          type="date"
          value={birthDate}
          onChange={(ev) => {
            publisher.birthDate = ev.target.value;
            setBirthDate(ev.target.value);
          }}
        />
        <br />
        Baptism Date:
        <input
          type="date"
          value={baptismDate}
          onChange={(ev) => {
            publisher.baptismDate = ev.target.value;
            setBaptismDate(ev.target.value);
          }}
        />
        <br />
        Phone (Mobile):
        <input
          type="tel"
          value={mobilePhone}
          onChange={(ev) => {
            publisher.mobilePhone = ev.target.value;
            setMobilePhone(ev.target.value);
          }}
        />
        <br />
        Phone (Home):
        <input
          type="tel"
          value={homePhone}
          onChange={(ev) => {
            publisher.homePhone = ev.target.value;
            setHomePhone(ev.target.value);
          }}
        />
        <br />
        Email (Personal):
        <input
          type="email"
          value={personalEmail}
          onChange={(ev) => {
            publisher.personalEmail = ev.target.value;
            setPersonalEmail(ev.target.value);
          }}
        />
        <br />
        Email (Jwpub):
        <input
          type="email"
          value={jwpubEmail}
          onChange={(ev) => {
            publisher.jwpubEmail = ev.target.value;
            setJwpubEmail(ev.target.value);
          }}
        />
        <br />
        Unit:
        <input
          type="text"
          value={unit}
          onChange={(ev) => {
            publisher.unit = ev.target.value;
            setUnit(ev.target.value);
          }}
        />
        <br />
        House:
        <input
          type="text"
          value={house}
          onChange={(ev) => {
            publisher.house = ev.target.value;
            setHouse(ev.target.value);
          }}
        />
        <br />
        Street:
        <input
          type="text"
          value={street}
          onChange={(ev) => {
            publisher.street = ev.target.value;
            setStreet(ev.target.value);
          }}
        />
        <br />
        Suburb:
        <input
          type="text"
          value={suburb}
          onChange={(ev) => {
            publisher.suburb = ev.target.value;
            setSuburb(ev.target.value);
          }}
        />
        <button onClick={() => viewPublisherDetails(publisher)}>cancel</button>
        <button onClick={() => updatePublisherDetails(publisher)}>
          Update
        </button>
      </form>
    </>
  );
}

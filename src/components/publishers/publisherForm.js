import { useState } from "react";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../services/formatting/phoneNumbers";
import { InputText } from "../form/text";
import { InputNumber } from "../form/number";

export const PublisherForm = ({ publisher }) => {
  const formSectionStyles = "flex justify-between flex-col p-4 border border-bg m-2";
  const sectionLabelStyles = "text-white p-1 m-1 text-lg bg-primary";
  const inputStyles = "space-y-2";

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
  const [unitNumber, setUnitNumber] = useState(publisher.unitNumber);
  const [houseNumber, setHouseNumber] = useState(publisher.houseNumber);
  const [street, setStreet] = useState(publisher.street);
  const [suburb, setSuburb] = useState(publisher.suburb);
  return (
    <>
      <div className={formSectionStyles}>
        <div className={sectionLabelStyles}>Name</div>
        <div className={inputStyles}>
          <InputText
            label="First"
            value={firstName}
            action={(e) => {
              publisher.firstName = e.target.value;
              setFirstName(e.target.value);
            }}
          />
          <InputText
            label="Middle"
            value={middleName}
            action={(e) => {
              publisher.middleName = e.target.value;
              setMiddleName(e.target.value);
            }}
          />
          <InputText
            label="Last"
            value={lastName}
            action={(e) => {
              publisher.lastName = e.target.value;
              setLastName(e.target.value);
            }}
          />
          <InputText
            label="Other"
            value={otherName}
            action={(e) => {
              publisher.otherName = e.target.value;
              setOtherName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={formSectionStyles}>
        <div className={sectionLabelStyles}>Phone</div>
        <div className={inputStyles}>
          <InputNumber
            label="Mobile"
            value={formatMobileNumber(mobilePhone)}
            action={(e) => {
              const { value } = e.target;
              e.target.value = formatMobileNumber(value);
              setMobilePhone(value.replace(/[^\d]/g, ""));
              publisher.mobilePhone = value.replace(/[^\d]/g, "");
            }}
          />
          <InputNumber
            label="Home"
            value={formatHomeNumber(homePhone)}
            action={(e) => {
              const { value } = e.target;
              e.target.value = formatHomeNumber(value);
              setHomePhone(value.replace(/[^\d]/g, ""));
              publisher.homePhone = value.replace(/[^\d]/g, "");
            }}
          />
        </div>
      </div>

      <div className={formSectionStyles}>
        <div className={sectionLabelStyles}>Email</div>
        <div className={inputStyles}>
          <InputText
            label="Personal"
            value={personalEmail}
            action={(e) => {
              publisher.personalEmail = e.target.value;
              setPersonalEmail(e.target.value);
            }}
          />
          <InputText
            label="Jwpub"
            value={jwpubEmail}
            action={(e) => {
              publisher.jwpubEmail = e.target.value;
              setJwpubEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={formSectionStyles}>
        <div className={sectionLabelStyles}>Address</div>
        <div className={inputStyles}>
          <div className="flex flex-row space-x-2">
            <InputText
              label="Unit"
              value={unitNumber}
              action={(e) => {
                publisher.unitNumber = e.target.value;
                setUnitNumber(e.target.value);
              }}
            />
            <InputText
              label="House"
              value={houseNumber}
              action={(e) => {
                publisher.houseNumber = e.target.value;
                setHouseNumber(e.target.value);
              }}
            />
          </div>
          <InputText
            label="Street"
            value={street}
            action={(e) => {
              publisher.street = e.target.value;
              setStreet(e.target.value);
            }}
          />
          <InputText
            label="Suburb"
            value={suburb}
            action={(e) => {
              publisher.suburb = e.target.value;
              setSuburb(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../services/formatting/phoneNumbers";
import { InputText } from "../form/text";
import { InputNumber } from "../form/number";
import { InputEmail } from "../form/email";
import { InputSelect } from "../form/select";
import { db } from "../../db/dexie/dexie";
import { useLiveQuery } from "dexie-react-hooks";

export const PublisherForm = ({ publisher }) => {
  // const heads = useLiveQuery(() =>
  //   db.publishers.filter(publisher =>{
  //     publisher.familyHead === publisher.id || publisher.familyHead === undefined
  //   }).toArray()
  // );
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  const formSectionStyles = "flex  bg-white p-2 m-2";
  const sectionLabelStyles = "text-jwGrey p-1 m-1 font-bold text-lg basis-1/4";
  const inputStyles = "grow grid gap-2 landscape:grid-cols-2 md:grid-cols-2";

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
      <div className="grid ">
        <div className={`${formSectionStyles} md:col-span-2`}>
          <div className={`${sectionLabelStyles}`}>Name</div>
          <div className={`${inputStyles} landscape:md:grid-cols-4 `}>
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
              label="Display   "
              value={otherName}
              action={(e) => {
                publisher.otherName = e.target.value;
                setOtherName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={`${formSectionStyles} `}>
          <div className={sectionLabelStyles}>Phone</div>
          <div className={`${inputStyles}`}>
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

        <div className={`${formSectionStyles} col-start-1`}>
          <div className={sectionLabelStyles}>Email</div>
          <div className={`${inputStyles}`}>
            <InputEmail
              label="Personal"
              value={personalEmail}
              action={(e) => {
                publisher.personalEmail = e.target.value;
                setPersonalEmail(e.target.value);
              }}
            />
            <InputEmail
              label="Jwpub"
              value={jwpubEmail}
              action={(e) => {
                publisher.jwpubEmail = e.target.value;
                setJwpubEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={`${formSectionStyles} md:col-span-2 `}>
          <div className={`${sectionLabelStyles} `}>Address</div>
          <div className={`${inputStyles} landscape:md:grid-cols-3`}>
            <div className="grid grid-cols-2 gap-2">
              <InputNumber
                label="Unit"
                value={unitNumber}
                action={(e) => {
                  publisher.unitNumber = e.target.value;
                  setUnitNumber(e.target.value);
                }}
              />
              <InputNumber
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
            <div className="md:col-start-2 landscape:col-start-2 landscape:md:col-start-3">
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
        </div>
        <div className={`${formSectionStyles} col-start-1`}>
          <div className={sectionLabelStyles}>Family</div>
          <InputSelect
            label="Family Head"
            value={familyHead}
            options={publishers}
            action={(e) => {
              publisher.familyHead = e.target.value;
              setFamilyHead(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

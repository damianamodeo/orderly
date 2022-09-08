import { useState } from "react";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../../services/formatting/phoneNumbers";
import { InputText } from "../../inputs/text";
import { InputNumber } from "../../inputs/number";
import { InputEmail } from "../../inputs/email";
import { InputSelect } from "../../inputs/select";
import { db } from "../../../services/db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { toTitleCase } from "../../../services/formatting/letterCase";
import { Card } from "../../../temp/components/card";
import { Heading } from "../../text/heading";


export const PublisherForm = ({ publisher }) => {
  const heads = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").filter(publisher => {
      return publisher.familyHead === publisher.id
    }).toArray()
  );

  const formSectionStyles = "flex  bg-white p-2 m-2";
  const inputStyles = "grow grid gap-2 landscape:grid-cols-2 md:grid-cols-2";

  const [firstName, setFirstName] = useState(publisher.firstName || "");
  const [middleName, setMiddleName] = useState(publisher.middleName || "");
  const [lastName, setLastName] = useState(publisher.lastName || "");
  const [otherName, setOtherName] = useState(publisher.otherName || "");
  const [familyHead, setFamilyHead] = useState(publisher.familyHead || "");
  // const [birthDate, setBirthDate] = useState(publisher.birthDate || "");
  // const [baptismDate, setBaptismDate] = useState(publisher.baptismDate || "");
  const [homePhone, setHomePhone] = useState(publisher.homePhone || "");
  const [mobilePhone, setMobilePhone] = useState(publisher.mobilePhone || "");
  const [personalEmail, setPersonalEmail] = useState(publisher.personalEmail || "");
  const [jwpubEmail, setJwpubEmail] = useState(publisher.jwpubEmail || "");
  const [unitNumber, setUnitNumber] = useState(publisher.unitNumber || "");
  const [houseNumber, setHouseNumber] = useState(publisher.houseNumber || "");
  const [street, setStreet] = useState(publisher.street || "");
  const [suburb, setSuburb] = useState(publisher.suburb || "");
  return (
    <>
      <div className="grid ">
        <Card className={`${formSectionStyles} md:col-span-2`}>
          <Heading >Name</Heading>
          <div className={`${inputStyles} landscape:md:grid-cols-4 `}>
            <InputText
              label="First"
              value={firstName}
              action={(e) => {
                publisher.firstName = toTitleCase(e.target.value.trim());
                setFirstName(toTitleCase(e.target.value));
              }}
            />
            <InputText
              label="Middle"
              value={middleName}
              action={(e) => {
                publisher.middleName = toTitleCase(e.target.value.trim());
                setMiddleName(toTitleCase(e.target.value));
              }}
            />
            <InputText
              label="Last"
              value={lastName}
              action={(e) => {
                publisher.lastName = toTitleCase(e.target.value.trim());
                setLastName(toTitleCase(e.target.value));
              }}
            />
            <InputText
              label="Display   "
              value={otherName}
              action={(e) => {
                publisher.otherName = toTitleCase(e.target.value.trim());
                setOtherName(toTitleCase(e.target.value));
              }}
            />
          </div>
        </Card>

        <Card className={`${formSectionStyles} `}>
          <Heading >Phone</Heading>
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
        </Card>

        <Card className={`${formSectionStyles} col-start-1`}>
          <Heading >Email</Heading>
          <div className={`${inputStyles}`}>
            <InputEmail
              label="Personal"
              value={personalEmail}
              action={(e) => {
                publisher.personalEmail = e.target.value.trim();
                setPersonalEmail(e.target.value);
              }}
            />
            <InputEmail
              label="Jwpub"
              value={jwpubEmail}
              action={(e) => {
                publisher.jwpubEmail = e.target.value.trim();
                setJwpubEmail(e.target.value);
              }}
            />
          </div>
        </Card>

        <Card className={`${formSectionStyles} md:col-span-2 `}>
          <Heading >Address</Heading>
          <div className={`${inputStyles} landscape:md:grid-cols-3`}>
            <div className="grid grid-cols-2 gap-2">
              <InputNumber
                label="Unit"
                value={unitNumber}
                action={(e) => {
                  publisher.unitNumber = e.target.value.trim();
                  setUnitNumber(e.target.value);
                }}
              />
              <InputNumber
                label="House"
                value={houseNumber}
                action={(e) => {
                  publisher.houseNumber = e.target.value.trim();
                  setHouseNumber(e.target.value);
                }}
              />
            </div>
            <InputText
              label="Street"
              value={street}
              action={(e) => {
                publisher.street = toTitleCase(e.target.value.trim());
                setStreet(toTitleCase(e.target.value));
              }}
            />
            <div className="md:col-start-2 landscape:col-start-2 landscape:md:col-start-3">
              <InputText
                label="Suburb"
                value={suburb}
                action={(e) => {
                  publisher.suburb = toTitleCase(e.target.value.trim());
                  setSuburb(toTitleCase(e.target.value));
                }}
              />
            </div>
          </div>
        </Card>

        <Card className={`${formSectionStyles} col-start-1`}>
          <Heading >Details</Heading>
          <div className={`${inputStyles}  `}>
            <InputSelect
              label="Family Head"
              value={familyHead}
              publisher={publisher}
              options={heads}
              action={(e) => {
                publisher.familyHead = parseInt(e.target.value);
                setFamilyHead(e.target.value);
              }}
            />
            <InputSelect
              label="Group"
              value={familyHead}
              publisher={publisher}
              options={heads}
              action={(e) => {
                publisher.familyHead = parseInt(e.target.value);
                setFamilyHead(e.target.value);
              }}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

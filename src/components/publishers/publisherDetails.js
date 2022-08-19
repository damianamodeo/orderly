import { Header } from "../header/header";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../services/formatting/phoneNumbers";
import { Content } from "../main/content";
import { MessageIcon } from "../../icons/message";

export const PublisherDetails = ({
  publisher,
  publisherList,
  publisherEdit,
}) => {
  const sectionStyle = "bg-white m-2 p-4 font-bold";
  const subSectionStyle = "flex justify-between m-2 ";
  const detailStyle = "text-lg text-secondary font-normal truncate";

  return (
    <>
      <Content bgColor={"bg-bgLightest"}>
        <div className="grid landscape:grid-cols-2">
        {publisher.mobilePhone || publisher.homePhone ? (
          <div className={sectionStyle}>
            Phone
            {publisher.mobilePhone ? (
              <div className={subSectionStyle}>
                <a
                  className={detailStyle}
                  href={`tel://${publisher.mobilePhone}`}
                >
                  {formatMobileNumber(publisher.mobilePhone)}
                </a>
                <div className="flex space-x-2">
                  <a href={`sms://${publisher.mobilePhone}`}>
                    <MessageIcon/>
                  </a>
                </div>
              </div>
            ) : null}
            {publisher.homePhone ? (
              <div className={subSectionStyle}>
                <a
                  className={detailStyle}
                  href={`tel://${publisher.homePhone}`}
                >
                  {formatHomeNumber(publisher.homePhone)}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}

        {publisher.personalEmail || publisher.jwpubEmail ? (
          <div className={sectionStyle}>
            Email
            {publisher.personalEmail ? (
              <div className={subSectionStyle}>
                <a
                  className={detailStyle}
                  href={`mailto:${publisher.personalEmail}`}
                >
                  {publisher.personalEmail}
                </a>
              </div>
            ) : null}
            {publisher.jwpubEmail ? (
              <div className={subSectionStyle}>
                <a
                  className={detailStyle}
                  href={`mailto:${publisher.jwpubEmail}`}
                >
                  {publisher.jwpubEmail}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}

        {publisher.unitNumber ||
        publisher.houseNumber ||
        publisher.street ||
        publisher.suburb ? (
          <div className={sectionStyle}>
            Address
            <div className={subSectionStyle}>
              <a
                className={detailStyle}
                href={`https://www.google.com/maps/place/${publisher.houseNumber}+${publisher.street},+${publisher.suburb}`}
              >
                <p>
                  {publisher.unitNumber ? `${publisher.unitNumber}/` : null}
                  {`${publisher.houseNumber} ${publisher.street}`}
                </p>
                <p>{`${publisher.suburb}`}</p>
              </a>
            </div>
          </div>
        ) : null}
        </div>
      </Content>

      <Header
        headerLeft={<div className="text-primary text-header" onClick={publisherList}>Back</div>}
        title={
          <div className="font-bold text-header">
            {publisher.otherName
              ? `${publisher.otherName}`
              : publisher.firstName}{" "}
            {publisher.middleName == publisher.otherName ? null : publisher.middleName} {publisher.lastName}
          </div>
        }
        headerRight={<div className="text-primary text-header" onClick={() => publisherEdit(publisher)}>Edit</div>}
      />
    </>
  );
};

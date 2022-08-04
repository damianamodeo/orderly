import { Header } from "../header/header";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../services/formatting/phoneNumbers";
import { Content } from "../main/content";

export const PublisherDetails = ({
  publisher,
  publisherList,
  publisherEdit,
}) => {
  const sectionStyle = "border-bg border bg-white m-2 p-2";
  const subSectionStyle = "flex justify-between m-2";
  const detailStyle = "text-2xl font-bold";

  return (
    <>
      <Content bgColor={"bg-bgLight"}>
        <div className="m-2 text-center text-xs">
          {publisher.otherName
            ? `"${publisher.otherName}"`
            : publisher.firstName}{" "}
          {publisher.middleName} {publisher.lastName}
        </div>
        <div className={sectionStyle}>
          Phone
          <div className={subSectionStyle}>
            <div className={detailStyle}>
              {formatMobileNumber(publisher.mobilePhone)}
            </div>
            <div className="flex space-x-2">
              <a href={`tel://${publisher.mobilePhone}`}>Call</a>
              <a href={`sms://${publisher.mobilePhone}`}>Message</a>
            </div>
          </div>
          <div className={subSectionStyle}>
            <div className={detailStyle}>
              {formatHomeNumber(publisher.homePhone)}
            </div>
            <a href={`tel://${publisher.homePhone}`}>Call</a>
          </div>
        </div>

        <div className={sectionStyle}>
          <div className={subSectionStyle}>
            <a className={detailStyle} href={`mailto:${publisher.personalEmail}`}>{publisher.personalEmail}</a>
          </div>
          <div className={subSectionStyle}>
            <a className={detailStyle} href={`mailto:${publisher.jwpubEmail}`}>{publisher.jwpubEmail}</a>
          </div>
        </div>
        
        <div className={sectionStyle}>
        <div className={subSectionStyle}>
          <div>
            {publisher.unitNumber ? `${publisher.unitNumber}/` : null}
            {`${publisher.houseNumber} ${publisher.street}, ${publisher.suburb}`}
          </div>
          <a
            href={`https://www.google.com/maps/place/${publisher.houseNumber}+${publisher.street},+${publisher.suburb}`}
          >
            Location
          </a>
        </div>
        </div>
      </Content>

      <Header
        headerLeft={<div onClick={publisherList}>Back</div>}
        title={
          <div>
            {publisher.firstName} {publisher.lastName}
          </div>
        }
        headerRight={<div onClick={() => publisherEdit(publisher)}>Edit</div>}
      />
    </>
  );
};

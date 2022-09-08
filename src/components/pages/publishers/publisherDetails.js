import { Header } from "../../main/header";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../../services/formatting/phoneNumbers";
import { Content } from "../../main/content";
import { MessageIcon } from "../../../icons/other/message";
import { Heading } from "../../text/heading";
import { Card } from "../../../temp/components/card";

export const PublisherDetails = ({
  publisher,
  publisherList,
  publisherEdit,
}) => {
  const subSectionStyle = "flex justify-between m-2 ";
  const detailStyle = "text-lg text-secondary font-normal truncate";

  return (
    <>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <div className="grid landscape:grid-cols-2">
          {publisher.mobilePhone || publisher.homePhone ? (
            <Card>
              <Heading>Phone</Heading>
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
                      <MessageIcon />
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
            </Card>
          ) : null}

          {publisher.personalEmail || publisher.jwpubEmail ? (
            <Card>
              <Heading>Email</Heading>
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
            </Card>
          ) : null}

          {publisher.unitNumber ||
          publisher.houseNumber ||
          publisher.street ||
          publisher.suburb ? (
            <Card>
              <Heading>Address</Heading>
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
            </Card>
          ) : null}
        </div>
      </Content>

      <Header
        headerLeft={
          <div className="text-header text-primary" onClick={publisherList}>
            Back
          </div>
        }
        title={
          <Heading>
            {publisher.otherName
              ? `${publisher.otherName}`
              : publisher.firstName}{" "}
            {publisher.middleName === publisher.otherName
              ? null
              : publisher.middleName}{" "}
            {publisher.lastName}
          </Heading>
        }
        headerRight={
          <div
            className="text-header text-primary"
            onClick={() => publisherEdit(publisher)}
          >
            Edit
          </div>
        }
      />
    </>
  );
};

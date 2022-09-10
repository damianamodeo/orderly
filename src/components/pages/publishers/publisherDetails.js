import { Header } from "../../main/header";
import {
  formatMobileNumber,
  formatHomeNumber,
} from "../../../services/formatting/phoneNumbers";
import { Content } from "../../main/content";
import { MessageIcon } from "../../../icons/other/message";
import { Heading } from "../../text/heading";
import { Card } from "../../../temp/components/card";
import { style } from "../../../icons/header/style";
import { CardLabel } from "../../text/card-label";
import { LinkText } from "../../text/link-text";
import { CardGroup } from "../../cards/card-group";

export const PublisherDetails = ({
  publisher,
  publisherList,
  publisherEdit,
}) => {

  return (
    <>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <CardGroup>
          {publisher.mobilePhone || publisher.homePhone ? (
            
            <Card>
              <CardLabel>Phone</CardLabel>
              {publisher.mobilePhone ? (
                <div className="flex justify-between">
                  <LinkText href={`tel://${publisher.mobilePhone}`}>
                    {formatMobileNumber(publisher.mobilePhone)}
                  </LinkText>
                    <a href={`sms://${publisher.mobilePhone}`}>
                      <MessageIcon />
                    </a>
     
                </div>
              ) : null}
              {publisher.homePhone ? (
                <LinkText href={`tel://${publisher.homePhone}`}>
                  {formatHomeNumber(publisher.homePhone)}
                </LinkText>
              ) : null}
            </Card>
          ) : null}

          {publisher.personalEmail || publisher.jwpubEmail ? (
            <Card>
              <CardLabel>Email</CardLabel>
              {publisher.personalEmail ? (
                <LinkText
                  href={`mailto:${publisher.personalEmail}`}
                >
                  {publisher.personalEmail}
                </LinkText>
              ) : null}
              {publisher.jwpubEmail ? (
                <LinkText
                  href={`mailto:${publisher.jwpubEmail}`}
                >
                  {publisher.jwpubEmail}
                </LinkText>
              ) : null}
            </Card>
          ) : null}

          {publisher.unitNumber ||
          publisher.houseNumber ||
          publisher.street ||
          publisher.suburb ? (
            <Card>
              <CardLabel>Address</CardLabel>
              <LinkText
                href={`https://www.google.com/maps/place/${publisher.houseNumber}+${publisher.street},+${publisher.suburb}`}
              >
                <p>
                  {publisher.unitNumber ? `${publisher.unitNumber}/` : null}
                  {`${publisher.houseNumber} ${publisher.street}`}
                </p>
                <p>{`${publisher.suburb}`}</p>
              </LinkText>
            </Card>
          ) : null}
        </CardGroup>
      </Content>

      <Header
        headerLeft={
          <div className={style} onClick={publisherList}>
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
          <div className={style} onClick={() => publisherEdit(publisher)}>
            Edit
          </div>
        }
      />
    </>
  );
};

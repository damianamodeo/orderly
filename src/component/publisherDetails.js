import HeaderRight from "./headerRight";
import Header from "./header";
import HeaderLeft from "./headerLeft";

const PublisherDetails = ({
  publisher,
  editPublisherDetails,
  viewPublisherList,
}) => {
  const today = new Date();

  const birthDate = new Date(publisher.birthDate);
  const birthDays =
    (today.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24;
  const birthYears = Math.floor(birthDays / 365.25);
  const birthMonths = ((birthDays / 365.25 - birthYears) / 10) * 12;

  const baptismDate = new Date(publisher.baptismDate);
  const baptismDays =
    (today.getTime() - baptismDate.getTime()) / 1000 / 60 / 60 / 24;
  const baptismYears = Math.floor(baptismDays / 365.25);
  const baptismMonths = ((baptismDays / 365.25 - baptismYears) / 10) * 12;

  return (
    <>
      <Header
        headerLeft={<HeaderLeft label="Back" actionLeft={viewPublisherList} />}
        title={`${publisher.firstName} ${publisher.middleName} ${publisher.lastName}`}
        headerRight={
          <HeaderRight
            label="Edit"
            actionRight={() => editPublisherDetails(publisher)}
          />
        }
      />

      
        {(publisher.mobilePhone.length > 0 ||
          publisher.homePhone.length > 0) && (
          <div className="detail-group">
            {publisher.mobilePhone.length > 0 && (
              <>
                <div className="label-details">mobile</div>
                <a className="detail" href={`tel://${publisher.mobilePhone}`}>
                  {publisher.mobilePhone}
                </a>
              </>
            )}
            {publisher.homePhone.length > 0 && (
              <>
                <div className="label-details">home</div>
                <a className="detail" href={`tel://${publisher.homePhone}`}>
                  {publisher.homePhone}
                </a>
              </>
            )}
          </div>
        )}

        {(publisher.house.length > 0 ||
          publisher.street.length > 0 ||
          publisher.suburb.length > 0) && (
          <div className="detail-group">
            <div className="label-details">address</div>
            <a
              className="detail"
              href={`https://www.google.com/maps/place/${publisher.house}+${publisher.street},+${publisher.suburb}`}
            >
              {publisher.house} {publisher.street}, {publisher.suburb}
            </a>
          </div>
        )}

        {(publisher.birthDate.length > 0 ||
          publisher.baptismDate.length > 0) && (
          <div className="detail-group">
            {publisher.birthDate.length > 0 && (
              <>
                <div className="label-details">date of birth</div>
                <div className="detail">
                  {birthDate.getDate()}{" "}
                  {birthDate.toLocaleString("default", { month: "long" })}
                  {birthDate.getFullYear()}
                </div>
                <div className="detail-small">
                  {birthYears} years {birthMonths.toFixed(1) * 10} months
                </div>
              </>
            )}
            {publisher.baptismDate.length > 0 && (
              <>
                <div className="label-details">date of birth</div>
                <div className="detail">
                  {baptismDate.getDate()}{" "}
                  {baptismDate.toLocaleString("default", { month: "long" })}
                  {baptismDate.getFullYear()}
                </div>
                <div className="detail-small">
                  {baptismYears} years {baptismMonths.toFixed(1) * 10} months   
                </div>
              </>
            )}
          </div>
        )}
      
    </>
  );
};

export default PublisherDetails;

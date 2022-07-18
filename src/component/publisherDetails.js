import HeaderRight from "./headerRight";
import Header from "./header";
import HeaderLeft from "./headerLeft";

const PublisherDetails = ({
  publisher,
  editPublisherDetails,
  viewPublisherList,
}) => {
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

      <div className="publisher-details">
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

        <div>DOB: {publisher.birthDate}</div>
        <div>Bap: {publisher.baptismDate}</div> 
      </div>
    </>
  );
};

export default PublisherDetails;

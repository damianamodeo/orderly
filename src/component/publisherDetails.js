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
          <HeaderRight label="Edit" actionRight={() => editPublisherDetails(publisher)} />
        }
      />
      <div className="publisher-details">
        <div>
          {publisher.firstName} {publisher.lastName}
        </div>
        <div>Mobile: {publisher.mobilePhone}</div>
        <div>DOB: {publisher.birthDate}</div>
      </div>
    </>
  );
};

export default PublisherDetails;

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
          publisher.homePhone.length > 0) ? 
          <div className="detail-group">
            
          
            <div className="label-details">mobile</div>
            <div className="detail">{publisher.mobilePhone}</div> 

            <div className="label-details">home</div>
            <div className="detail">{publisher.homePhone}</div>
          </div> : null
        }

        <div>DOB: {publisher.birthDate}</div>
        <div>Bap: {publisher.baptismDate}</div>
        <div>DOB: {publisher.birthDate}</div>
        <div>DOB: {publisher.birthDate}</div>
        <div>DOB: {publisher.birthDate}</div>
        <div>DOB: {publisher.birthDate}</div>
        <div>DOB: {publisher.birthDate}</div>
        <div>DOB: {publisher.birthDate}</div>
      </div>
    </>
  );
};

export default PublisherDetails;

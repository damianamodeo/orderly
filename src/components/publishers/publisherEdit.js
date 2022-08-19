import { updatePublisher } from "../../db/updatePublisher";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { PublisherForm } from "./publisherForm";

export const PublisherEdit = ({ publisher, publisherDetails }) => {

  
  const publisherOriginal = structuredClone(publisher);
  
  return (
    <>
      <Content bgColor={"bg-bgLightest"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className="text-primary text-header" onClick={() => publisherDetails(publisherOriginal)}>Cancel</div>}
        title={<div className="font-bold text-header">Edit Publisher</div>}
        headerRight={
          <div className="text-primary text-header" onClick={() => updatePublisher(publisher, publisherDetails(publisher))}>Done</div>
        }
      />
    </>
  );
};

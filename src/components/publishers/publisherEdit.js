import { updatePublisher } from "../../db/dexie/updatePublisher";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { PublisherForm } from "./publisherForm";

export const PublisherEdit = ({ publisher, publisherDetails }) => {

  
  const publisherOriginal = structuredClone(publisher);
  
  return (
    <>
      <Content bgColor={"bg-bgLight"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div onClick={() => publisherDetails(publisherOriginal)}>Cancel</div>}
        title={<div>Edit Publisher</div>}
        headerRight={
          <div onClick={() => updatePublisher(publisher, publisherDetails(publisher))}>Done</div>
        }
      />
    </>
  );
};

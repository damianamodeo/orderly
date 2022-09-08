import { updatePublisher } from "../../../services/db/updatePublisher";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { PublisherForm } from "./publisherForm";
import { Heading } from "../../text/heading";

export const PublisherEdit = ({ publisher, publisherDetails }) => {

  
  const publisherOriginal = structuredClone(publisher);
  
  return (
    <>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className="text-primary text-header" onClick={() => publisherDetails(publisherOriginal)}>Cancel</div>}
        title={<Heading >Edit Publisher</Heading>}
        headerRight={
          <div className="text-primary text-header" onClick={() => updatePublisher(publisher, publisherDetails(publisher))}>Done</div>
        }
      />
    </>
  );
};

import { updatePublisher } from "../../../services/db/updatePublisher";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { PublisherForm } from "./publisherForm";
import { Heading } from "../../text/heading";
import { style } from "../../../icons/header/style";

export const PublisherEdit = ({ publisher, publisherDetails }) => {

  
  const publisherOriginal = structuredClone(publisher);
  
  return (
    <>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className={style} onClick={() => publisherDetails(publisherOriginal)}>Cancel</div>}
        title={<Heading >Edit Publisher</Heading>}
        headerRight={
          <div className={style} onClick={() => updatePublisher(publisher, publisherDetails(publisher))}>Done</div>
        }
      />
    </>
  );
};

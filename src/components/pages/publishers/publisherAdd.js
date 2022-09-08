import { addPublisher } from "../../../services/db/addPublisher";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { PublisherForm } from "./publisherForm";
import { Heading } from "../../text/heading";

export const PublisherAdd = ({ publisherList }) => {
  const publisher = {};
  return (
    <>
      <Content bgColor={"bg-bgLightest"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className="text-primary text-header" onClick={publisherList}>Cancel</div>}
        title={<Heading >Add Publisher</Heading>}
        headerRight={
          <div className="text-primary text-header" onClick={() => addPublisher(publisher, publisherList)}>Done</div>
        }
      />
    </>
  );
};

import { addPublisher } from "../../db/addPublisher";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { PublisherForm } from "./publisherForm";

export const PublisherAdd = ({ publisherList }) => {
  const publisher = {};
  return (
    <>
      <Content bgColor={"bg-bgLightest"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className="text-primary text-header" onClick={publisherList}>Cancel</div>}
        title={<div className="font-bold text-header">Add Publisher</div>}
        headerRight={
          <div className="text-primary text-header" onClick={() => addPublisher(publisher, publisherList)}>Done</div>
        }
      />
    </>
  );
};

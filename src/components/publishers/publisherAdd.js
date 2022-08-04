import { addPublisher } from "../../db/dexie/addPublisher";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { PublisherForm } from "./publisherForm";

export const PublisherAdd = ({ publisherList }) => {
  const publisher = {};
  return (
    <>
      <Content bgColor={"bg-bgLight"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div onClick={publisherList}>Cancel</div>}
        title={<div>Add Publisher</div>}
        headerRight={
          <div onClick={() => addPublisher(publisher, publisherList)}>Done</div>
        }
      />
    </>
  );
};

import { addPublisher } from "../../../services/db/addPublisher";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { PublisherForm } from "./publisherForm";
import { Heading } from "../../text/heading";
import { style } from "../../../icons/header/style";

export const PublisherAdd = ({ publisherList }) => {
  const publisher = {};
  return (
    <>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <PublisherForm publisher={publisher} />
      </Content>
      <Header
        headerLeft={<div className={style} onClick={publisherList}>Cancel</div>}
        title={<Heading >Add Publisher</Heading>}
        headerRight={
          <div className={style} onClick={() => addPublisher(publisher, publisherList)}>Done</div>
        }
      />
    </>
  );
};

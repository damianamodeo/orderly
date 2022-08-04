import { db } from "../../db/dexie/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../header/header";
import { Content } from "../main/content";

export const PublisherList = ({ publisherDetails, publisherAdd }) => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  return (
    <>
      <Content bgColor={"bg-bgLight"}>
        <div
          className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {publishers?.map((publisher) => (
            <div
              key={publisher.id}
              className="
          m-1
          bg-white 
          px-2
          py-6
          "
              onClick={() => {
                publisherDetails(publisher);
              }}
            >
              {publisher.lastName}, {publisher.firstName}
            </div>
          ))}
        </div>
      </Content>
      <Header
        headerLeft={<div></div>}
        title={<div>Publishers</div>}
        headerRight={<div onClick={() => {publisherAdd()}}>add</div>}
      />
    </>
  );
};

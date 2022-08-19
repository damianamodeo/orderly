import { db } from "../../db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { AddIcon } from "../../icons/add";
import { Menubar } from "../main/menubar";

export const PublisherList = ({ publisherDetails, publisherAdd }) => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  const menuList = [
    { label: "ACTIVE", id: 1 },
    { label: "GROUPS", id: 2 },
    { label: "BROTHERS", id: 3 },
    { label: "FAMILY", id: 4 },
    { label: "INACTIVE", id: 5 },
    { label: "ALL", id: 6 },
  ];

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<div className="font-bold text-header">Publishers</div>}
        headerRight={
          <div className="text-primary text-header"
            onClick={() => {
              publisherAdd();
            }}
          >
            <AddIcon />
          </div>
        }
      />
      {/* <Menubar menuList={menuList} /> */}
      <Content bgColor={"bg-bgLightest"}>
        <div
          className="
            -z-1 
            my-12
            px-2
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
    </>
  );
};

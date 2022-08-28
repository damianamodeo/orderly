import { db } from "../../services/db/dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { AddIcon } from "../../icons/add";
import { useState } from "react";
import { Search } from "../form/search";
import { PublisherListAll } from "./publisherListAll";

export const PublisherList = ({ publisherDetails, publisherAdd }) => {
  // let searchString = new RegExp("mi", "i")

  const [searchString, setSearchString] = useState("");

  const publishers = useLiveQuery(() =>
    db.publishers
      .orderBy("[lastName+firstName]")
      .filter((publisher) => {
        let str = `${publisher.firstName} ${publisher.lastName} ${publisher.middleName} ${publisher.otherName}`;
        return str.match(searchString);
      })
      .toArray()
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
        title={<div className="text-header font-bold">Publishers</div>}
        headerRight={
          <div
            className="text-header text-primary"
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
        <Search
          action={(e) => {
            setSearchString(new RegExp(e.target.value, "i"));
          }}
        />
        <PublisherListAll searchString={searchString} publisherDetails={publisherDetails}/>
      </Content>
    </>
  );
};

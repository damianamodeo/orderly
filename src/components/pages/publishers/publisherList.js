// import { db } from "../../services/db/dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import { Header } from "../../main/header";
import { Content } from "../../main/content";
import { AddIcon } from "../../../icons/header/add";
import { useState } from "react";
import { Search } from "../../inputs/search";
import { PublisherListAll } from "./publisherListAll";
import { Heading } from "../../text/heading";

export const PublisherList = ({ publisherDetails, publisherAdd }) => {
  // let searchString = new RegExp("mi", "i")

  const [searchString, setSearchString] = useState("");

  // const publishers = useLiveQuery(() =>
  //   db.publishers
  //     .orderBy("[lastName+firstName]")
  //     .filter((publisher) => {
  //       let str = `${publisher.firstName} ${publisher.lastName} ${publisher.middleName} ${publisher.otherName}`;
  //       return str.match(searchString);
  //     })
  //     .toArray()
  // );

  // const menuList = [
  //   { label: "ACTIVE", id: 1 },
  //   { label: "GROUPS", id: 2 },
  //   { label: "BROTHERS", id: 3 },
  //   { label: "FAMILY", id: 4 },
  //   { label: "INACTIVE", id: 5 },
  //   { label: "ALL", id: 6 },
  // ];

  return (
    <>
      <Header
        headerLeft={<div></div>}
        title={<Heading>Publishers</Heading>}
        headerRight={
          <div
            onClick={() => {
              publisherAdd();
            }}
          >
            <AddIcon />
          </div>
        }
      />
      {/* <Menubar menuList={menuList} /> */}
      <div className="">
        <Search
          action={(e) => {
            setSearchString(new RegExp(e.target.value, "i"));
          }}
        />
      </div>
      <Content bgColor={"bg-bgLightest dark:bg-black"}>
        <PublisherListAll
          searchString={searchString}
          publisherDetails={publisherDetails}
        />
      </Content>
    </>
  );
};

import { useState } from "react";
import { Header } from "../header/header";
import { Content } from "../main/content";
import { PublisherList } from "./publisherList";

export const Publishers = () => {
  const [page, setPage] = useState(<PublisherList />);

  return (
    <>
      <Header />
      <Content>
        <div>{page}</div>
      </Content>
    </>
  );
};

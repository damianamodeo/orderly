import Header from "./header";
import HeaderRight from "./headerRight";
import { db } from "../js/db";
import { useLiveQuery } from "dexie-react-hooks";

export default function PublisherList({ viewPublisherDetails, addPublisher }) {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("lastName").toArray()
  );

  return (
    <>
      <Header
        title="Publishers"
        headerRight={<HeaderRight actionRight={addPublisher} label="Add"/>}
      />
      <ul className="publisher-list">
        {publishers?.map((publisher) => (
          <li
            key={publisher.id}
            onClick={() => viewPublisherDetails(publisher)}
          >
            {publisher.lastName}, {publisher.firstName}
          </li>
        ))}
      </ul>
    </>
  );
}

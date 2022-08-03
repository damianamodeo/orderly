import { db } from "../../db/dexie";
import { useLiveQuery } from "dexie-react-hooks";

export const PublisherList = ({publisherDetails}) => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  return (
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
          p-2
          "
          onClick={() => {publisherDetails(publisher)}}
        >
          {publisher.lastName}, {publisher.firstName}
        </div>
      ))}
    </div>
  );
};

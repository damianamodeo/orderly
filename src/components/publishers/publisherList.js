import { db } from "../../db/dexie";
import { useLiveQuery } from "dexie-react-hooks";

export const PublisherList = () => {
  const publishers = useLiveQuery(() =>
    db.publishers.orderBy("[lastName+firstName]").toArray()
  );

  return (
    <>
      {publishers?.map((publisher) => (
        <div key={publisher.id}>Publisher</div>
      ))}
    </>
  );
};

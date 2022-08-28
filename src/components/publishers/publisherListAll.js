import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../services/db/dexie";


export const PublisherListAll = ({searchString, publisherDetails}) => {
  const publishers = useLiveQuery(async () => {
    const publishers = await db.publishers
      .orderBy("[lastName+firstName]")
      .filter((publisher) => {
        let str = `${publisher.firstName} ${publisher.lastName} ${publisher.middleName} ${publisher.otherName}`;
        return str.match(searchString);
      })
      .toArray();

    return publishers;
  }, [searchString]);
  return (
    <>
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
    </>
  );
}

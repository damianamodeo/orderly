import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../services/db/dexie";
import { Card } from "../../../temp/components/card";
import { CardLabel } from "../../text/card-label";

export const PublisherListAll = ({ searchString, publisherDetails }) => {
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
        <Card
          key={publisher.id}
          action={() => {
            publisherDetails(publisher);
          }}
        >
          <CardLabel>
            {publisher.lastName}, {publisher.firstName}
          </CardLabel>
        </Card>
      ))}
    </>
  );
};

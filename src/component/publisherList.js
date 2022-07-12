import { db } from "../js/db";
import { useLiveQuery } from "dexie-react-hooks";
// const PublisherList = () => {
//   return <div className="publisher-list" >PublisherList</div>;
// };

// export default PublisherList;

export default function PublisherList() {
  const publishers = useLiveQuery(
    () => db.publishers.toArray()
  );

  return <ul className="publisher-list">
    {publishers?.map(publisher => <li key={publisher.id}>
      {publisher.firstName}, {publisher.birthDate}
    </li>)}
  </ul>;
}
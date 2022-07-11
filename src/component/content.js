import PublisherList from "./publisherList";
import PublisherDetails from "./publisherDetails";
import PublisherAdd from "./publisherAdd";
import PublisherEdit from "./publisherEdit";

const Content = () => {
  return (
    <div className="content">
      {"Content"}
      <PublisherList></PublisherList>
      <PublisherDetails></PublisherDetails>
      <PublisherAdd></PublisherAdd>
      <PublisherEdit></PublisherEdit>
    </div>
  );
};

export default Content;

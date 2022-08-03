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
      
      <div className="text-secondary m-2">
          Publisher Page: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          voluptates nihil, tempora alias labore provident, suscipit sequi
          possimus tempore rem laborum nam temporibus eligendi, aperiam iure
          minus repellendus dolore est obcaecati porro ipsa magni perferendis
          velit impedit. Inventore iure, mollitia veritatis magnam delectus nam
          nostrum laborum pariatur assumenda. Tempora exercitationem, vitae
          dolores obcaecati cum iste natus nulla molestias voluptatibus eaque
          magnam eligendi molestiae reiciendis sed laborum dignissimos nam,
          sapiente consequuntur similique. Aperiam fugit tempore soluta,
          explicabo reiciendis quos enim iste perspiciatis consectetur voluptas
          corporis velit modi error maiores. Aut dicta in suscipit, quas libero
          voluptatum necessitatibus. Quo, sequi sapiente. Molestias assumenda
          laborum error consequuntur, dolore quasi nobis ad, accusantium sequi
          dolores sint dolorum consequatur fugit. Est voluptatem sit ipsam
          incidunt laudantium beatae pariatur cupiditate corporis similique
          consequuntur sapiente sequi, optio odio assumenda voluptatibus earum
          eos nostrum vero officiis eum voluptate harum repudiandae possimus.
          Iure laudantium corrupti ex eum quae maiores, eligendi ipsam rerum
          cupiditate atque dolorum, necessitatibus officiis repellendus vel
          quidem laborum cumq
        </div>
    </>
  );
};

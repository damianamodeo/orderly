import { db } from "../js/db";
import { useState } from "react";

// const PublisherAdd = () => {


//   return <div className="publisher-add">PublisherAdd</div>;
// };

// export default PublisherAdd;

export default function PublisherAdd({defaultAge} = {defaultAge: 21}) {
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthAge] = useState(defaultAge);
  const [lastName, setLastName] = useState("");

  async function addFriend() {
    try {

      // Add the new friend!
      const id = await db.publishers.add({
        firstName,
        lastName,
        birthDate
      });

      setLastName(`Friend ${firstName} successfully added. Got id ${id}`);
      setFirstName("");
      setBirthAge(defaultAge);
    } catch (error) {
      setLastName(`Failed to add ${firstName}: ${error}`);
    }
  }

  return <div className="publisher-add"> 
    <p>
      {setLastName}
    </p>
    Name:
    <input
      type="text"
      value={firstName}
      onChange={ev => setFirstName(ev.target.value)}
    />
    Age:
    <input
      type="date"
      value={birthDate}
      onChange={ev => setBirthAge(Number(ev.target.value))}
    />
    
    <button onClick={addFriend}>
      Add
    </button>
  </div>
}
import { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {

    const [contacts, setContacts] = useState([]) // for saving all the contacts in one place
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        name: "", lastName: "", email: "", phone: "",
    }) // to manage input states

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name]: value})); 
    }

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please Enter Valid Data!!!");
            return;
        }
        setAlert("");
        setContacts((contacts) => ([...contacts, contact])); // new contacts will be added to the previous contacts
        setContact({
            name: "", lastName: "", email: "", phone: "",
        }); // for reseting the form inputs
    }
  return (
    <div>
      <div>
        <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler}/>
        <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler}/>
        <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler}/>
        <input type="tel" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler}/>
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts

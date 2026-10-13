import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs"; // puting constants outside of the component
import { v4 } from "uuid";



function Contacts() {

    const [contacts, setContacts] = useState([]) // for saving all the contacts in one place
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id: "", name: "", lastName: "", email: "", phone: "",
    }) // to manage input states

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name]: value})); 
    }

    const addHandler = () => {
        // checking inputs if they are empty
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please Enter Valid Data!!!");
            return;
        }
        setAlert(""); // if inputs are not empty
        const newContact = {...contact, id: v4()}
        setContacts((contacts) => ([...contacts, newContact])); // new contacts will be added to the previous contacts
        setContact({
            name: "", lastName: "", email: "", phone: "",
        }); // for reseting the form inputs
    }
    // defining deleteHandler and sending it as props to Contact Item 
    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
    }

  return (
    <div>
      <div>
        {inputs.map((input, index) => (       //building inputs
            <input 
            key={input.name}
            type={input.type} 
            placeholder={input.placeholder} 
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}  
            />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
        <div>{alert && <p>{alert}</p>}</div> {/*if alert is empty, it means "Falsy" */}
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}/> {/*giving ContactList component contacts as props */}
    </div>
  )
}

export default Contacts

import ContactItem from "./ContactItem"

function ContactsList({contacts, setContacts}) {
  return (
    <div>
      <h3>Contacts List</h3>
      {(contacts.length) ?
        <ul>
          {contacts.map(
            contact => (<ContactItem data={contact} key={contact.id} setContacts={setContacts} contacts={contacts}/>)
            )
          }
        </ul> : 
        <p>No Contacts Yet !!!</p> } 
    </div>
  )
}

export default ContactsList

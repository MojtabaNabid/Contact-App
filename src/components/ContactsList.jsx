import ContactItem from "./ContactItem"

function ContactsList({contacts}) {
  return (
    <div>
      <h3>Contacts List</h3>
      {(contacts.length) ?
        <ul>
          {contacts.map(
            contact => (<ContactItem data={contact} key={contact.id} />)
            )
          }
        </ul> : 
        <p>No Contacts Yet !!!</p> } 
    </div>
  )
}

export default ContactsList

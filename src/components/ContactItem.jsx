
function ContactItem({data: {id, name, lastName, email, phone}, setContacts, contacts}) {
  console.log(contacts)
    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
    }

    return (
    <li key={id}>
        <p>{name}{lastName}</p>
        <p><span>📧</span>{email}</p>
        <p><span>📱</span>{phone}</p>
        <button onClick={() => deleteHandler(id)}>🗑️</button>
    </li> 
  )
}

export default ContactItem

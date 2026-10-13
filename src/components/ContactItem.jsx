
function ContactItem({data: {id, name, lastName, email, phone}}) {
    // console.log(data)
  return (
    <li key={id}>
        <p>{name}{lastName}</p>
        <p><span>📧</span>{email}</p>
        <p><span>📱</span>{phone}</p>
        <button>🗑️</button>
    </li> 
  )
}

export default ContactItem

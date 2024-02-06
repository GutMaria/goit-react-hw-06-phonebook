import css from './list.module.css'

const ContactsList = ({ items, deleteContact }) => {
    const elements = items.map(({id, name, number }) => <li key={id}>{name}: {number}.  <button onClick={()=> deleteContact(id)} type="button" className={css.deleteBtn}>Delete</button></li>)
    
    return <ul className={css.list}>{elements }</ul>
}

export default ContactsList;
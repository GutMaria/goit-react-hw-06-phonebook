import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/contacts-slice'
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors'

import css from './list.module.css'

const ContactsList = () => {

    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
    }
    
    const FilterContacts = useSelector(getFilteredContacts)

    const elements = FilterContacts.map(({id, name, number }) => <li key={id}>{name}: {number}.  <button onClick={()=> onDeleteContact(id)} type="button" className={css.deleteBtn}>Delete</button></li>)
    
    return <ul className={css.list}>{elements }</ul>
}

export default ContactsList;
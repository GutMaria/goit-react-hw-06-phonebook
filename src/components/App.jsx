// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList'
// import { nanoid } from "nanoid";

import { getFilteredContacts, getAllContacts} from '../redux/contacts/contacts-selectors'
import { addContact, deleteContact } from '../redux/contacts/contacts-slice'
import {setFilter} from '../redux/filter/filter-slice'


const App = () => {

  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  

  const onAddContact = (data) => {
    // Якщо контакт вже існує:
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return
    }

    dispatch(addContact(data));
  };

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }
    
    const changeFitler = ({ target }) => {
      dispatch(setFilter(target.value))
    }
  
    
    const FilterContacts = getFilteredContacts();

    return (
      <div className="container"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 28,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={onAddContact} />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {Boolean(contacts.length) && <>
          <h2>Contacts</h2>
          <div>
            <h3>Find contacts by name:</h3>
            <input name="filter" onChange={changeFitler} className="filter-input" />
          </div>
          <ContactsList items={FilterContacts} deleteContact={onDeleteContact} />
        </>
        }
      </div>
    );
    
  }

export default App;


import {  useEffect, useState} from "react";
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList'
import { nanoid } from "nanoid";


const App = () => {
  // якщо в localStorage є збережені данні 
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {localStorage.setItem('contacts', JSON.stringify(contacts)) }, [contacts])
  

  const addContact = (data) => {
    // Якщо контакт вже існує:
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return
    }
    // Якщо контакта не існує додаємо його в state
    setContacts((prevState) => {
      const newContact = { id: nanoid(), ...data, };

      return [...prevState, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return (prevContacts.filter(contact => contact.id !== id))
    })
  }
    
    const changeFitler = ({ target }) => {
      setFilter(target.value)
    }
  
  
  // Ця функція є в contacts-selectors!!!!!!
    const getFilteredContacts = () => {
      if (!filter) {
        return contacts;
      }

      const normalizedFilter = filter.toLowerCase();
      const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
      return filteredContacts;
    }
  // ----------------------
    
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
        <ContactsForm onSubmit={addContact} />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {Boolean(contacts.length) && <>
          <h2>Contacts</h2>
          <div>
            <h3>Find contacts by name:</h3>
            <input name="filter" onChange={changeFitler} className="filter-input" />
          </div>
          <ContactsList items={FilterContacts} deleteContact={deleteContact} />
        </>
        }
      </div>
    );
    
  }

export default App;


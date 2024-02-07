import { useSelector } from "react-redux";
import { getAllContacts } from '../redux/contacts/contacts-selectors'
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList'
import Filter from "./Filter/Filter";


const App = () => {

  const contacts = useSelector(getAllContacts);

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactsForm  />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {Boolean(contacts.length) && <>
          <h2>Contacts</h2>
          <Filter/>
          <ContactsList />
        </>
        }
      </div>
    );
  }

export default App;


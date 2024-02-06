import { useState } from "react";
import { nanoid } from "nanoid";
import css from './contacts-form.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
}

const ContactsForm = ({onSubmit}) => {
  const [state, setState] = useState(INITIAL_STATE);

  let contactNameId = nanoid();
  let contactNumberId = nanoid();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState( prevState =>({...prevState, [name]: value }));
  }

  const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state});
        setState({...INITIAL_STATE});
  }
  
    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.wrap}>
          <label htmlFor={contactNameId}>Name</label>
          <input value={state.name} type="text" id={contactNameId} required name="name" onChange={handleChange}/>
        </div>
        <div className={css.wrap}>
        <label htmlFor={contactNumberId}>Number</label>
          <input value={state.number} type="tel" id={contactNumberId} required name="number" onChange={handleChange}/>
        </div>
        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    )
  }

export default ContactsForm;
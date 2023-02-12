import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Form.module.css'

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const storeContacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const alertContact = storeContacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    alertContact.length
      ? Notify.warning(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

      return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
            <span className={css.formTitle}>Name</span>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            id="nameInputId"
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
            <label className={css.label}>
            <span className={css.formTitle}>Number</span>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            id="numberInputId"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
            <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
}
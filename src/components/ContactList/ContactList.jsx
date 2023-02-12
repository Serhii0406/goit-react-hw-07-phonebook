import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
    return contacts.map(({ id, name, number }) => (
    <ul key={id} className={css.contactListItem} >
      <ContactItem name={name} id={id} number={number} />
    </ul>
  ));
};
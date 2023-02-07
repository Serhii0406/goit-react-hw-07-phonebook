import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

const getVisibleContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return visibleContacts.map(({ id, name, number }) => (
    <ul key={id} className={css.contactListItem} >
      <ContactItem name={name} id={id} number={number} />
    </ul>
  ));
};
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
      <>
        <Section title="Phonebook">
          <Form/>
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>
          Your phone book is empty, your first contact has been added
        </p>
      )}
        </Section>
      </>
    );
}


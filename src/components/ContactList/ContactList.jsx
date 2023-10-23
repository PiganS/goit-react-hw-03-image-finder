import { ButtonDel, Contact, ContactText } from './ContactList.styled';

export const ContactList = ({ contacts, handleDeleteProduct }) => (
  <ul>
    {contacts.map(contact => (
      <Contact key={contact.id}>
        <ContactText>
          {contact.name}: {contact.number}
        </ContactText>
        <ButtonDel
          onClick={() => handleDeleteProduct(contact.id)}
          type="button"
        >
          Delete
        </ButtonDel>
      </Contact>
    ))}
  </ul>
);

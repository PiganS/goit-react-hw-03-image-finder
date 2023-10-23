import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459 12 56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443 89 12' },
      { id: 'id-3', name: 'Eden Clements', number: '645 17 79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227 91 26' },
    ],

    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addsNewContact = newContact => {
    const hasDuplicates = this.state.contacts.some(
      product => product.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteProduct = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterElements(contacts);

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addsNewContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </Container>
    );
  }
}

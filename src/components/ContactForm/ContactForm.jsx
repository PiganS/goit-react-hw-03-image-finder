import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button, Form, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      ...this.state,
    };

    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
            required
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

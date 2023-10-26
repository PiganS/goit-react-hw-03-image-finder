import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    requestValue: '',
  };

  handleRequestValueChange = evt => {
    this.setState({ requestValue: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.requestValue.trim() === '') {
      toast('Enter your request');
      return;
    }
    this.props.onSubmit(this.state.requestValue);
    this.setState({ requestValue: '' });
  };

  render() {
    return (
      <Header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <FaSearch />
          </button>

          <input
            value={this.state.requestValue}
            onChange={this.handleRequestValueChange}
            className="input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

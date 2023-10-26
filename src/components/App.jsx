import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { TostBox } from './Toast/Toast';

export class App extends Component {
  state = {
    requestValue: '',
  };

  handleFormSubmit = requestValue => {
    this.setState({ requestValue: requestValue });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery requestValue={this.state.requestValue} />
        <TostBox />
      </Container>
    );
  }
}

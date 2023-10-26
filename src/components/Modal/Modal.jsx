import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyboardPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyboardPress);
  }

  keyboardPress = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  clickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { data } = this.props;
    return (
      <StyledOverlay onClick={this.clickOverlay}>
        <StyledModal>
          <img src={data} alt="The same img but large" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

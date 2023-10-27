import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { TostBox } from './Toast/Toast';
import { fetchQuery } from 'components/api';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    requestValue: '',
    hits: [],
    page: 1,
    total: null,
    spiner: false,
    showModal: false,
    urlModal: null,
  };

  componentDidUpdate(_, prevState) {
    const { page, requestValue } = this.state;
    if (page !== prevState.page || requestValue !== prevState.requestValue) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { page, hits, requestValue } = this.state;
    try {
      this.setState({ spiner: true });

      const data = await fetchQuery(requestValue, page);

      if (data.hits.length === 0) {
        toast.error('No images found for your query!');
        return;
      }

      const newGallery = data.hits;
      const totalHits = data.totalHits;

      if (page === 1) {
        toast.info(`Found: ${totalHits} images for your request`);
      }

      this.setState({
        hits: [...hits, ...newGallery],
        total: totalHits,
        spiner: false,
      });
    } catch (error) {
      toast.error('Error fetching data: ', error);
    } finally {
      this.setState({ spiner: false });
    }
  };

  handleFormSubmit = requestValue => {
    this.setState({ requestValue: requestValue, hits: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = urlModal => {
    this.setState({ urlModal: urlModal, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { spiner, hits, total, showModal, urlModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {spiner && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />
        {hits.length > 0 && hits.length < total && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && <Modal data={urlModal} closeModal={this.closeModal} />}
        <TostBox />
      </Container>
    );
  }
}

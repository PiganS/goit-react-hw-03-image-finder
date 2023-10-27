import { Component } from 'react';
import { fetchQuery } from 'components/api';
import { Button } from 'components/Button/Button';
import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Modal } from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    hits: [],
    page: 1,
    total: null,
    spiner: false,
    showModal: false,
    urlModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.requestValue !== this.props.requestValue) {
      this.setState({ hits: [], page: 1, total: null });
      this.fetchImages();
    } else if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { page, hits } = this.state;
    try {
      this.setState({ spiner: true });

      const data = await fetchQuery(this.props.requestValue, page);

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
      });
      this.setState({ spiner: false });
    } catch (error) {
      toast.error('Error fetching data: ', error);
    } finally {
      this.setState({ spiner: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = evt => {
    const image = evt.currentTarget.dataset.img;

    this.setState({ urlModal: image, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { spiner, hits, showModal, urlModal } = this.state;
    return (
      <>
        {spiner && <Loader />}

        {hits.length > 0 && (
          <StyledImageGallery>
            {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                openModal={this.openModal}
              />
            ))}
          </StyledImageGallery>
        )}

        {hits.length > 0 && hits.length < this.state.total && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && <Modal data={urlModal} closeModal={this.closeModal} />}
      </>
    );
  }
}

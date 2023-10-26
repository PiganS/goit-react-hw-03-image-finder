import {
  StyledImageGalleryItem,
  StyledImageGalleryImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <StyledImageGalleryItem data-img={largeImageURL} onClick={openModal}>
      <StyledImageGalleryImage src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};

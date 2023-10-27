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
    <StyledImageGalleryItem
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <StyledImageGalleryImage src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};

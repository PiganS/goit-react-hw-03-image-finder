import { BallTriangle } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => (
  <StyledLoader>
    <BallTriangle
      height={50}
      width={50}
      radius={5}
      color="#4b58c9"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  </StyledLoader>
);

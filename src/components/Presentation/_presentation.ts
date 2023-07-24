import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';

export const Container = styled(WindowContainer).attrs({
  'data-com': 'Container',
})`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const ProfileImg = styled.img.attrs({ 'data-com': 'ProfileImg' })`
min-width: 150px;
  width: 30%;
  max-width: 300px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;
export const InfosContainer = styled.div.attrs({
  'data-com': 'InfosContainer',
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
  }
`;

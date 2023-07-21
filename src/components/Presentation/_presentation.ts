import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';

export const Container = styled(WindowContainer).attrs({
  'data-com': 'Container',
})``;
export const ProfileImg = styled.img.attrs({ 'data-com': 'ProfileImg' })`
  width: 150px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';

export const Container = styled(WindowContainer).attrs({
  'data-com': 'Container',
})`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
export const Image = styled.img.attrs({ 'data-com': 'Image' })`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

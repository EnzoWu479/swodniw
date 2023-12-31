import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';

export const Container = styled(WindowContainer).attrs({
  'data-com': 'Container',
})`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 4.5rem);
  grid-template-rows: repeat(auto-fit, 6rem);
`;
export const ImageIcon = styled.img.attrs({ 'data-com': 'ImageIcon' })`
  object-fit: contain;
  aspect-ratio: 1/1;
`;

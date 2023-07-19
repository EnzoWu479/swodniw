import { styled } from 'styled-components';

export const FooterContainer = styled.footer.attrs({
  'data-com': 'FooterContainer',
})`
  height: 3rem;
  width: 100dvw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #1113;
  backdrop-filter: blur(0.5rem);
  padding: 0.5rem 1rem;
`;
export const HomeButton = styled.button.attrs({ 'data-com': 'HomeButton' })`
  height: 100%;
  aspect-ratio: 1/1;

  background-color: transparent;
  border: none;

  cursor: pointer;

  img {
    height: 100%;
  }
`;

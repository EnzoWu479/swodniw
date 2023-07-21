import { css, styled } from 'styled-components';

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
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 4px;
`;
export const HomeButton = styled.button.attrs({ 'data-com': 'HomeButton' })`
  height: 100%;
  aspect-ratio: 1.1/1;

  background-color: transparent;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 60%;
  }
`;
interface WindowButtonProps {
  inShow: boolean;
}
export const WindowButton = styled.button.attrs({
  'data-com': 'WindowButton',
})<WindowButtonProps>`
  height: 100%;
  aspect-ratio: 1.2/1;

  background-color: transparent;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 60%;
  }

  transition: background-color 0.2s ease-in-out;

  ${({ inShow }) =>
    inShow &&
    css`
      background-color: #fff3;
    `}
`;

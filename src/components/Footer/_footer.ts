import { css, styled } from 'styled-components';

export const FooterContainer = styled.footer.attrs({
  'data-com': 'FooterContainer',
})`
  height: 3rem;
  width: 100dvw;
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: #1113;
  backdrop-filter: blur(0.5rem);
  /* padding: 0 1rem; */
  padding-right: 1rem;

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

  img,
  svg {
    color: #fff;
    height: 60%;
    width: 60%;
  }

  transition: background-color 0.2s ease-in-out;

  ${({ inShow }) =>
    inShow &&
    css`
      background-color: #fff3;
    `}
`;
export const TimeContainer = styled.div.attrs({ 'data-com': 'TimeContainer' })`
  margin-left: auto;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.75rem;

  gap: 0.25rem;
`;
export const Time = styled.span.attrs({ 'data-com': 'Time' })``;
export const DateField = styled.span.attrs({ 'data-com': 'DateField' })``;

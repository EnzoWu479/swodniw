import { styled } from 'styled-components';

export const Button = styled.button.attrs({ 'data-com': 'Button' })`
  height: 6rem;
  width: fit-content;
  width: 4.5rem;
  background-color: transparent;
  border: 2px solid transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  padding: 0.25rem;

  transition: all 0.1s ease-in;

  &:focus {
    background-color: #fff3;
    border-radius: 0.2rem;
    border-color: #d2d2d2;
  }
`;
export const IconName = styled.span.attrs({ 'data-com': 'IconName' })`
  font-size: 0.75rem;
  color: #fff;

  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  filter: drop-shadow(1px 2px #000a);

  ${Button}:focus & {
    white-space: normal;
    overflow: visible;
    text-align: center;
    word-wrap: break-word;
  }
`;
export const IconContainer = styled.div.attrs({ 'data-com': 'IconContainer' })`
  width: 80%;
  aspect-ratio: 1;
  pointer-events: none;

  img,
  svg {
    color: #fff;
    width: 100%;
    height: 100%;
  }
`;

import { styled } from 'styled-components';

export const Button = styled.button.attrs({ 'data-com': 'Button' })`
  height: 5rem;
  width: fit-content;
  max-width: 8rem;
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

  img {
    height: 80%;
    pointer-events: none;
  }

  &:focus {
    background-color: #fff3;
    border-radius: 0.2rem;
    border-color: #d2d2d2;
  }
`;
export const IconName = styled.span.attrs({ 'data-com': 'IconName' })`
  font-size: 1.125em;
  color: #fff;
`;

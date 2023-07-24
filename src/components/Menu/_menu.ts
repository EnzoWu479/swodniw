import { styled } from 'styled-components';

export const MenuWrapper = styled.button`
  position: relative;
  height: 100%;

  background-color: transparent;
  border: none;
`;
export const HomeButton = styled.div.attrs({ 'data-com': 'HomeButton' })`
  height: 100%;
  width: 3.25rem;
  /* aspect-ratio: 1.1/1; */

  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 60%;
    pointer-events: none;
    user-select: none;
  }

  &:hover,
  ${MenuWrapper}:focus-within & {
    background-color: #fff3;
  }
`;
export const MenuContainer = styled.div.attrs({ 'data-com': 'MenuContainer' })`
  position: absolute;
  background-color: #fff;
  width: 10rem;
  /* height: 10rem; */
  bottom: 100%;
  left: 0;

  opacity: 0;
  pointer-events: none;

  transform: translateY(0.5rem);
  z-index: 1;

  transition: all 0.2s ease-in-out;
  ${MenuWrapper}:focus-within & {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0.5rem);

    transform: translateY(0);
  }
`;

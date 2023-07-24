import Image from 'next/image';
import { styled } from 'styled-components';

export const Container = styled.main.attrs({ 'data-com': 'Container' })`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  padding-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 4.5rem);
  grid-template-rows: repeat(auto-fit, 6rem);
  gap: 0.5rem;

  #wallpaper {
    pointer-events: none;
    object-fit: cover;
    z-index: -1;
  }
`;
export const RandomContainer = styled.div.attrs({
  'data-com': 'RandomContainer',
})`
  background-color: red;
`;
